import { useSelector } from 'react-redux';
import { useClickOutside } from '../../customHooks/useClickOutside';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../redux/actions/sidebarActions';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import SortDialog from '../SortDialog/SortDialog';
import classNames from 'classnames';
import './sidebar.scss';

const Sidebar = () => {

    // state of this component stored in redux
    const isOpen = useSelector(state => state.sidebar.isOpen);

    const dispatch = useDispatch();

    const sidebarClasses = classNames({
        sidebar: true,
        'opened-sidebar': isOpen
    });

    const closeSidebar = () => {
        dispatch(toggleSidebar(false));
    };

    // using costome hook for handle cliking outside 
    // of the sidebar component
    const domNodeRef = useClickOutside(closeSidebar);

    return (
        <>
            <div className={`backdrop ${isOpen && 'is-open'} sidebar-backdrop`}></div>
            <aside className={sidebarClasses} ref={domNodeRef}>
                <button
                    className="success-dialog__close-btn"
                    onClick={closeSidebar}
                >
                    <MdClose size="2.5em" />
                </button>
                <section className="sidebar__filters">
                    <h3 className="sidebar__filters-label">Categories</h3>
                    <CategoryFilter />
                    <div className="sidebar__separator"></div>
                    <h3 className="sidebar__filters-label">Sorting</h3>
                    <SortDialog />
                </section>
            </aside>
        </>
    );
};

export default Sidebar;
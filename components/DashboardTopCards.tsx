
interface DashboardTopCards {
    imgSrc: string;
    title: string;
    description: string;
}

export default function DashboardTopCards({imgSrc, title, description} : DashboardTopCards) {
    return (
        <div className="flex items-center p-4 bg-white rounded shadow">
            <img src={imgSrc} alt="Icon 1" className="w-12 h-12 mr-4"/>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}
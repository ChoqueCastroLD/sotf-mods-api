/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Manager_DescriptionInputs */

const en_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installs seen each day (by their requests to the site), their downloads and the clicks on the download links.`)
};

const es_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalaciones vistas cada día (por sus peticiones al sitio), sus descargas y los clics en los enlaces de descarga.`)
};

const de_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationen pro Tag (an ihren Anfragen an die Seite erkannt), ihre Downloads und die Klicks auf die Download-Links.`)
};

const fr_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installations vues chaque jour (par leurs requêtes au site), leurs téléchargements et les clics sur les liens de téléchargement.`)
};

const it_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installazioni viste ogni giorno (dalle loro richieste al sito), i loro download e i clic sui link di download.`)
};

const nl_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installaties die elke dag gezien worden (via hun verzoeken aan de site), hun downloads en de klikken op de downloadlinks.`)
};

const pl_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalacje widziane każdego dnia (po ich zapytaniach do strony), ich pobrania i kliknięcia w linki do pobrania.`)
};

const pt_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalações vistas por dia (pelas requisições ao site), seus downloads e os cliques nos links de download.`)
};

const ru_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установки, замеченные за день (по их запросам к сайту), их скачивания и клики по ссылкам на скачивание.`)
};

const sv_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installationer som syns varje dag (genom deras anrop till sidan), deras nedladdningar och klicken på nedladdningslänkarna.`)
};

const tr_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her gün görülen kurulumlar (siteye yaptıkları isteklerle), indirmeleri ve indirme bağlantılarına tıklamalar.`)
};

const zh_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每天出现的安装（根据它们对网站的请求）、它们的下载以及下载链接的点击。`)
};

const ja_admin_traffic_manager_description = /** @type {(inputs: Admin_Traffic_Manager_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`毎日確認されたインストール（サイトへのリクエストによる）、そのダウンロード、ダウンロードリンクのクリック。`)
};

/**
* | output |
* | --- |
* | "Installs seen each day (by their requests to the site), their downloads and the clicks on the download links." |
*
* @param {Admin_Traffic_Manager_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_manager_description = /** @type {((inputs?: Admin_Traffic_Manager_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Manager_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_manager_description(inputs)
	if (locale === "de") return de_admin_traffic_manager_description(inputs)
	if (locale === "fr") return fr_admin_traffic_manager_description(inputs)
	if (locale === "it") return it_admin_traffic_manager_description(inputs)
	if (locale === "nl") return nl_admin_traffic_manager_description(inputs)
	if (locale === "pl") return pl_admin_traffic_manager_description(inputs)
	if (locale === "pt") return pt_admin_traffic_manager_description(inputs)
	if (locale === "ru") return ru_admin_traffic_manager_description(inputs)
	if (locale === "sv") return sv_admin_traffic_manager_description(inputs)
	if (locale === "tr") return tr_admin_traffic_manager_description(inputs)
	if (locale === "zh") return zh_admin_traffic_manager_description(inputs)
	if (locale === "ja") return ja_admin_traffic_manager_description(inputs)
	return en_admin_traffic_manager_description(inputs)
});

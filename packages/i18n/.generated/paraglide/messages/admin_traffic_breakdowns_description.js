/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Breakdowns_DescriptionInputs */

const en_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page views of the period grouped by page type, source, country, language, device and session.`)
};

const es_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Páginas vistas del periodo agrupadas por tipo de página, origen, país, idioma, dispositivo y sesión.`)
};

const de_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitenaufrufe des Zeitraums nach Seitentyp, Quelle, Land, Sprache, Gerät und Anmeldung gruppiert.`)
};

const fr_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pages vues de la période groupées par type de page, source, pays, langue, appareil et connexion.`)
};

const it_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagine viste del periodo raggruppate per tipo di pagina, fonte, paese, lingua, dispositivo e accesso.`)
};

const nl_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginaweergaven van de periode gegroepeerd per paginatype, bron, land, taal, apparaat en aanmelding.`)
};

const pl_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odsłony z okresu pogrupowane według typu strony, źródła, kraju, języka, urządzenia i logowania.`)
};

const pt_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizações do período agrupadas por tipo de página, origem, país, idioma, dispositivo e sessão.`)
};

const ru_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотры за период по типу страницы, источнику, стране, языку, устройству и входу.`)
};

const sv_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodens sidvisningar grupperade efter sidtyp, källa, land, språk, enhet och inloggning.`)
};

const tr_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dönemin sayfa görüntülemeleri; sayfa türü, kaynak, ülke, dil, cihaz ve oturuma göre gruplanmış.`)
};

const zh_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该时间段的页面浏览，按页面类型、来源、国家、语言、设备和登录状态分组。`)
};

const ja_admin_traffic_breakdowns_description = /** @type {(inputs: Admin_Traffic_Breakdowns_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間中のページビューを、ページ種別・流入元・国・言語・デバイス・ログイン状態でまとめたもの。`)
};

/**
* | output |
* | --- |
* | "Page views of the period grouped by page type, source, country, language, device and session." |
*
* @param {Admin_Traffic_Breakdowns_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_breakdowns_description = /** @type {((inputs?: Admin_Traffic_Breakdowns_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Breakdowns_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_breakdowns_description(inputs)
	if (locale === "de") return de_admin_traffic_breakdowns_description(inputs)
	if (locale === "fr") return fr_admin_traffic_breakdowns_description(inputs)
	if (locale === "it") return it_admin_traffic_breakdowns_description(inputs)
	if (locale === "nl") return nl_admin_traffic_breakdowns_description(inputs)
	if (locale === "pl") return pl_admin_traffic_breakdowns_description(inputs)
	if (locale === "pt") return pt_admin_traffic_breakdowns_description(inputs)
	if (locale === "ru") return ru_admin_traffic_breakdowns_description(inputs)
	if (locale === "sv") return sv_admin_traffic_breakdowns_description(inputs)
	if (locale === "tr") return tr_admin_traffic_breakdowns_description(inputs)
	if (locale === "zh") return zh_admin_traffic_breakdowns_description(inputs)
	if (locale === "ja") return ja_admin_traffic_breakdowns_description(inputs)
	return en_admin_traffic_breakdowns_description(inputs)
});

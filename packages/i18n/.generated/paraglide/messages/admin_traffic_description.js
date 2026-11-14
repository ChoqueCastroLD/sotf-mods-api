/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_DescriptionInputs */

const en_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visits, downloads and SotF Mods Manager activity per day. Only you can see this page.`)
};

const es_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas, descargas y actividad de SotF Mods Manager por día. Solo tú puedes ver esta página.`)
};

const de_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besuche, Downloads und Aktivität von SotF Mods Manager pro Tag. Nur du siehst diese Seite.`)
};

const fr_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visites, téléchargements et activité de SotF Mods Manager par jour. Vous seul voyez cette page.`)
};

const it_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visite, download e attività di SotF Mods Manager al giorno. Solo tu puoi vedere questa pagina.`)
};

const nl_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bezoeken, downloads en activiteit van SotF Mods Manager per dag. Alleen jij ziet deze pagina.`)
};

const pl_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odwiedziny, pobrania i aktywność SotF Mods Manager dzień po dniu. Tylko ty widzisz tę stronę.`)
};

const pt_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitas, downloads e atividade do SotF Mods Manager por dia. Só você vê esta página.`)
};

const ru_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посещения, скачивания и активность SotF Mods Manager по дням. Эту страницу видите только вы.`)
};

const sv_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besök, nedladdningar och aktivitet i SotF Mods Manager per dag. Bara du kan se den här sidan.`)
};

const tr_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük ziyaretler, indirmeler ve SotF Mods Manager etkinliği. Bu sayfayı yalnızca sen görebilirsin.`)
};

const zh_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日访问、下载和 SotF Mods Manager 活动。只有你能看到此页面。`)
};

const ja_admin_traffic_description = /** @type {(inputs: Admin_Traffic_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日ごとの訪問・ダウンロード・SotF Mods Manager の利用状況。このページはあなただけが見られます。`)
};

/**
* | output |
* | --- |
* | "Visits, downloads and SotF Mods Manager activity per day. Only you can see this page." |
*
* @param {Admin_Traffic_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_description = /** @type {((inputs?: Admin_Traffic_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_description(inputs)
	if (locale === "de") return de_admin_traffic_description(inputs)
	if (locale === "fr") return fr_admin_traffic_description(inputs)
	if (locale === "it") return it_admin_traffic_description(inputs)
	if (locale === "nl") return nl_admin_traffic_description(inputs)
	if (locale === "pl") return pl_admin_traffic_description(inputs)
	if (locale === "pt") return pt_admin_traffic_description(inputs)
	if (locale === "ru") return ru_admin_traffic_description(inputs)
	if (locale === "sv") return sv_admin_traffic_description(inputs)
	if (locale === "tr") return tr_admin_traffic_description(inputs)
	if (locale === "zh") return zh_admin_traffic_description(inputs)
	if (locale === "ja") return ja_admin_traffic_description(inputs)
	return en_admin_traffic_description(inputs)
});

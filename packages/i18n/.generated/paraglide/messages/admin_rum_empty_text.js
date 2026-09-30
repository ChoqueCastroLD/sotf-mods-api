/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Empty_TextInputs */

const en_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visitors’ browsers report their measurements as they browse; check back tomorrow.`)
};

const es_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los navegadores de los visitantes envían sus mediciones mientras navegan; vuelve mañana.`)
};

const de_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Browser der Besucher melden ihre Messungen beim Surfen; schau morgen wieder rein.`)
};

const fr_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les navigateurs des visiteurs envoient leurs mesures pendant la navigation ; revenez demain.`)
};

const it_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I browser dei visitatori inviano le misurazioni mentre navigano; ricontrolla domani.`)
};

const nl_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De browsers van bezoekers sturen hun metingen tijdens het surfen; kom morgen terug.`)
};

const pl_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądarki odwiedzających wysyłają pomiary podczas przeglądania; zajrzyj jutro.`)
};

const pt_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os navegadores dos visitantes enviam as medições durante a navegação; volte amanhã.`)
};

const ru_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Браузеры посетителей присылают замеры во время просмотра; загляните завтра.`)
};

const sv_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besökarnas webbläsare skickar sina mätningar medan de surfar; titta in i morgon.`)
};

const tr_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ziyaretçilerin tarayıcıları gezinirken ölçümlerini gönderir; yarın tekrar bak.`)
};

const zh_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访客的浏览器会在浏览时发送测量数据；明天再来看看。`)
};

const ja_admin_rum_empty_text = /** @type {(inputs: Admin_Rum_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`訪問者のブラウザーが閲覧中に計測値を送ります。明日また確認してください。`)
};

/**
* | output |
* | --- |
* | "Visitors’ browsers report their measurements as they browse; check back tomorrow." |
*
* @param {Admin_Rum_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_empty_text = /** @type {((inputs?: Admin_Rum_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_empty_text(inputs)
	if (locale === "de") return de_admin_rum_empty_text(inputs)
	if (locale === "fr") return fr_admin_rum_empty_text(inputs)
	if (locale === "it") return it_admin_rum_empty_text(inputs)
	if (locale === "nl") return nl_admin_rum_empty_text(inputs)
	if (locale === "pl") return pl_admin_rum_empty_text(inputs)
	if (locale === "pt") return pt_admin_rum_empty_text(inputs)
	if (locale === "ru") return ru_admin_rum_empty_text(inputs)
	if (locale === "sv") return sv_admin_rum_empty_text(inputs)
	if (locale === "tr") return tr_admin_rum_empty_text(inputs)
	if (locale === "zh") return zh_admin_rum_empty_text(inputs)
	if (locale === "ja") return ja_admin_rum_empty_text(inputs)
	return en_admin_rum_empty_text(inputs)
});

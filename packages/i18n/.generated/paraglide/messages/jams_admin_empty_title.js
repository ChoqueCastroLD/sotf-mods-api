/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Empty_TitleInputs */

const en_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No jams yet`)
};

const es_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay jams`)
};

const de_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Jams`)
};

const fr_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun jam pour le moment`)
};

const it_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun jam`)
};

const nl_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen jams`)
};

const pl_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak jamów`)
};

const pt_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há jams`)
};

const ru_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Джемов пока нет`)
};

const sv_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga jams ännu`)
};

const tr_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz jam yok`)
};

const zh_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无 Jam`)
};

const ja_jams_admin_empty_title = /** @type {(inputs: Jams_Admin_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムはまだありません`)
};

/**
* | output |
* | --- |
* | "No jams yet" |
*
* @param {Jams_Admin_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_empty_title = /** @type {((inputs?: Jams_Admin_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_empty_title(inputs)
	if (locale === "de") return de_jams_admin_empty_title(inputs)
	if (locale === "fr") return fr_jams_admin_empty_title(inputs)
	if (locale === "it") return it_jams_admin_empty_title(inputs)
	if (locale === "nl") return nl_jams_admin_empty_title(inputs)
	if (locale === "pl") return pl_jams_admin_empty_title(inputs)
	if (locale === "pt") return pt_jams_admin_empty_title(inputs)
	if (locale === "ru") return ru_jams_admin_empty_title(inputs)
	if (locale === "sv") return sv_jams_admin_empty_title(inputs)
	if (locale === "tr") return tr_jams_admin_empty_title(inputs)
	if (locale === "zh") return zh_jams_admin_empty_title(inputs)
	if (locale === "ja") return ja_jams_admin_empty_title(inputs)
	return en_jams_admin_empty_title(inputs)
});

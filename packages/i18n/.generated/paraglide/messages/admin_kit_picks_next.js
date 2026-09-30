/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kit_Picks_NextInputs */

const en_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next page`)
};

const es_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página siguiente`)
};

const de_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nächste Seite`)
};

const fr_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page suivante`)
};

const it_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina successiva`)
};

const nl_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgende pagina`)
};

const pl_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Następna strona`)
};

const pt_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próxima página`)
};

const ru_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующая страница`)
};

const sv_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nästa sida`)
};

const tr_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonraki sayfa`)
};

const zh_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一页`)
};

const ja_admin_kit_picks_next = /** @type {(inputs: Admin_Kit_Picks_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のページ`)
};

/**
* | output |
* | --- |
* | "Next page" |
*
* @param {Admin_Kit_Picks_NextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kit_picks_next = /** @type {((inputs?: Admin_Kit_Picks_NextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_NextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kit_picks_next(inputs)
	if (locale === "de") return de_admin_kit_picks_next(inputs)
	if (locale === "fr") return fr_admin_kit_picks_next(inputs)
	if (locale === "it") return it_admin_kit_picks_next(inputs)
	if (locale === "nl") return nl_admin_kit_picks_next(inputs)
	if (locale === "pl") return pl_admin_kit_picks_next(inputs)
	if (locale === "pt") return pt_admin_kit_picks_next(inputs)
	if (locale === "ru") return ru_admin_kit_picks_next(inputs)
	if (locale === "sv") return sv_admin_kit_picks_next(inputs)
	if (locale === "tr") return tr_admin_kit_picks_next(inputs)
	if (locale === "zh") return zh_admin_kit_picks_next(inputs)
	if (locale === "ja") return ja_admin_kit_picks_next(inputs)
	return en_admin_kit_picks_next(inputs)
});

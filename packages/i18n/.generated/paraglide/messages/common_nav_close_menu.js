/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Nav_Close_MenuInputs */

const en_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close menu`)
};

const es_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar el menú`)
};

const de_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menü schließen`)
};

const fr_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer le menu`)
};

const it_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiudi il menu`)
};

const nl_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menu sluiten`)
};

const pl_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknij menu`)
};

const pt_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar menu`)
};

const ru_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть меню`)
};

const sv_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng menyn`)
};

const tr_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Menüyü kapat`)
};

const zh_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭菜单`)
};

const ja_common_nav_close_menu = /** @type {(inputs: Common_Nav_Close_MenuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メニューを閉じる`)
};

/**
* | output |
* | --- |
* | "Close menu" |
*
* @param {Common_Nav_Close_MenuInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_nav_close_menu = /** @type {((inputs?: Common_Nav_Close_MenuInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Nav_Close_MenuInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_nav_close_menu(inputs)
	if (locale === "de") return de_common_nav_close_menu(inputs)
	if (locale === "fr") return fr_common_nav_close_menu(inputs)
	if (locale === "it") return it_common_nav_close_menu(inputs)
	if (locale === "nl") return nl_common_nav_close_menu(inputs)
	if (locale === "pl") return pl_common_nav_close_menu(inputs)
	if (locale === "pt") return pt_common_nav_close_menu(inputs)
	if (locale === "ru") return ru_common_nav_close_menu(inputs)
	if (locale === "sv") return sv_common_nav_close_menu(inputs)
	if (locale === "tr") return tr_common_nav_close_menu(inputs)
	if (locale === "zh") return zh_common_nav_close_menu(inputs)
	if (locale === "ja") return ja_common_nav_close_menu(inputs)
	return en_common_nav_close_menu(inputs)
});

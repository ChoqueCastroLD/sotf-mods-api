/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_View_GridInputs */

const en_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grid`)
};

const es_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuadrícula`)
};

const de_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raster`)
};

const fr_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grille`)
};

const it_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Griglia`)
};

const nl_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raster`)
};

const pl_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siatka`)
};

const pt_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grade`)
};

const ru_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сетка`)
};

const sv_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rutnät`)
};

const tr_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Izgara`)
};

const zh_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网格`)
};

const ja_ui_domain_view_grid = /** @type {(inputs: Ui_Domain_View_GridInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グリッド`)
};

/**
* | output |
* | --- |
* | "Grid" |
*
* @param {Ui_Domain_View_GridInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_view_grid = /** @type {((inputs?: Ui_Domain_View_GridInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_View_GridInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_view_grid(inputs)
	if (locale === "de") return de_ui_domain_view_grid(inputs)
	if (locale === "fr") return fr_ui_domain_view_grid(inputs)
	if (locale === "it") return it_ui_domain_view_grid(inputs)
	if (locale === "nl") return nl_ui_domain_view_grid(inputs)
	if (locale === "pl") return pl_ui_domain_view_grid(inputs)
	if (locale === "pt") return pt_ui_domain_view_grid(inputs)
	if (locale === "ru") return ru_ui_domain_view_grid(inputs)
	if (locale === "sv") return sv_ui_domain_view_grid(inputs)
	if (locale === "tr") return tr_ui_domain_view_grid(inputs)
	if (locale === "zh") return zh_ui_domain_view_grid(inputs)
	if (locale === "ja") return ja_ui_domain_view_grid(inputs)
	return en_ui_domain_view_grid(inputs)
});

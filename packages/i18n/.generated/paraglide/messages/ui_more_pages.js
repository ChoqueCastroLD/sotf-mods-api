/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_More_PagesInputs */

const en_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More pages`)
};

const es_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más páginas`)
};

const de_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Seiten`)
};

const fr_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres pages`)
};

const it_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre pagine`)
};

const nl_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer pagina’s`)
};

const pl_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej stron`)
};

const pt_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais páginas`)
};

const ru_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие страницы`)
};

const sv_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler sidor`)
};

const tr_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer sayfalar`)
};

const zh_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多页面`)
};

const ja_ui_more_pages = /** @type {(inputs: Ui_More_PagesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他のページ`)
};

/**
* | output |
* | --- |
* | "More pages" |
*
* @param {Ui_More_PagesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_more_pages = /** @type {((inputs?: Ui_More_PagesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_More_PagesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_more_pages(inputs)
	if (locale === "de") return de_ui_more_pages(inputs)
	if (locale === "fr") return fr_ui_more_pages(inputs)
	if (locale === "it") return it_ui_more_pages(inputs)
	if (locale === "nl") return nl_ui_more_pages(inputs)
	if (locale === "pl") return pl_ui_more_pages(inputs)
	if (locale === "pt") return pt_ui_more_pages(inputs)
	if (locale === "ru") return ru_ui_more_pages(inputs)
	if (locale === "sv") return sv_ui_more_pages(inputs)
	if (locale === "tr") return tr_ui_more_pages(inputs)
	if (locale === "zh") return zh_ui_more_pages(inputs)
	if (locale === "ja") return ja_ui_more_pages(inputs)
	return en_ui_more_pages(inputs)
});

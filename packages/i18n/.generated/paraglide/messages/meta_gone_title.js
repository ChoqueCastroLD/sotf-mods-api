/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Gone_TitleInputs */

const en_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page removed`)
};

const es_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página eliminada`)
};

const de_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite entfernt`)
};

const fr_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page supprimée`)
};

const it_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina rimossa`)
};

const nl_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina verwijderd`)
};

const pl_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona usunięta`)
};

const pt_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página removida`)
};

const ru_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница удалена`)
};

const sv_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan har tagits bort`)
};

const tr_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa kaldırıldı`)
};

const zh_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面已移除`)
};

const ja_meta_gone_title = /** @type {(inputs: Meta_Gone_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページは削除されました`)
};

/**
* | output |
* | --- |
* | "Page removed" |
*
* @param {Meta_Gone_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_gone_title = /** @type {((inputs?: Meta_Gone_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Gone_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_gone_title(inputs)
	if (locale === "de") return de_meta_gone_title(inputs)
	if (locale === "fr") return fr_meta_gone_title(inputs)
	if (locale === "it") return it_meta_gone_title(inputs)
	if (locale === "nl") return nl_meta_gone_title(inputs)
	if (locale === "pl") return pl_meta_gone_title(inputs)
	if (locale === "pt") return pt_meta_gone_title(inputs)
	if (locale === "ru") return ru_meta_gone_title(inputs)
	if (locale === "sv") return sv_meta_gone_title(inputs)
	if (locale === "tr") return tr_meta_gone_title(inputs)
	if (locale === "zh") return zh_meta_gone_title(inputs)
	if (locale === "ja") return ja_meta_gone_title(inputs)
	return en_meta_gone_title(inputs)
});

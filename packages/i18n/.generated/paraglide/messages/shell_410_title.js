/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_410_TitleInputs */

const en_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This page was removed`)
};

const es_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página se eliminó`)
};

const de_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Seite wurde entfernt`)
};

const fr_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette page a été supprimée`)
};

const it_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa pagina è stata rimossa`)
};

const nl_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze pagina is verwijderd`)
};

const pl_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta strona została usunięta`)
};

const pt_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página foi removida`)
};

const ru_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница удалена`)
};

const sv_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan har tagits bort`)
};

const tr_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfa kaldırıldı`)
};

const zh_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此页面已被删除`)
};

const ja_shell_410_title = /** @type {(inputs: Shell_410_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページは削除されました`)
};

/**
* | output |
* | --- |
* | "This page was removed" |
*
* @param {Shell_410_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_410_title = /** @type {((inputs?: Shell_410_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_410_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_410_title(inputs)
	if (locale === "de") return de_shell_410_title(inputs)
	if (locale === "fr") return fr_shell_410_title(inputs)
	if (locale === "it") return it_shell_410_title(inputs)
	if (locale === "nl") return nl_shell_410_title(inputs)
	if (locale === "pl") return pl_shell_410_title(inputs)
	if (locale === "pt") return pt_shell_410_title(inputs)
	if (locale === "ru") return ru_shell_410_title(inputs)
	if (locale === "sv") return sv_shell_410_title(inputs)
	if (locale === "tr") return tr_shell_410_title(inputs)
	if (locale === "zh") return zh_shell_410_title(inputs)
	if (locale === "ja") return ja_shell_410_title(inputs)
	return en_shell_410_title(inputs)
});

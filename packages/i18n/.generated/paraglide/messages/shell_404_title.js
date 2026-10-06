/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_404_TitleInputs */

const en_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page not found`)
};

const es_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página no encontrada`)
};

const de_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite nicht gefunden`)
};

const fr_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page introuvable`)
};

const it_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina non trovata`)
};

const nl_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina niet gevonden`)
};

const pl_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono strony`)
};

const pt_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página não encontrada`)
};

const ru_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Страница не найдена`)
};

const sv_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidan hittades inte`)
};

const tr_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa bulunamadı`)
};

const zh_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面未找到`)
};

const ja_shell_404_title = /** @type {(inputs: Shell_404_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページが見つかりません`)
};

/**
* | output |
* | --- |
* | "Page not found" |
*
* @param {Shell_404_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_404_title = /** @type {((inputs?: Shell_404_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_404_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_404_title(inputs)
	if (locale === "de") return de_shell_404_title(inputs)
	if (locale === "fr") return fr_shell_404_title(inputs)
	if (locale === "it") return it_shell_404_title(inputs)
	if (locale === "nl") return nl_shell_404_title(inputs)
	if (locale === "pl") return pl_shell_404_title(inputs)
	if (locale === "pt") return pt_shell_404_title(inputs)
	if (locale === "ru") return ru_shell_404_title(inputs)
	if (locale === "sv") return sv_shell_404_title(inputs)
	if (locale === "tr") return tr_shell_404_title(inputs)
	if (locale === "zh") return zh_shell_404_title(inputs)
	if (locale === "ja") return ja_shell_404_title(inputs)
	return en_shell_404_title(inputs)
});

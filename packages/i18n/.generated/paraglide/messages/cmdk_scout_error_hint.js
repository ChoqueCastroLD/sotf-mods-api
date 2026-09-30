/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Error_HintInputs */

const en_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Try again in a moment, or search the catalog instead.`)
};

const es_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inténtalo de nuevo en un momento o busca en el catálogo.`)
};

const de_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versuche es gleich noch einmal oder durchsuche den Katalog.`)
};

const fr_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réessaie dans un instant ou cherche dans le catalogue.`)
};

const it_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova tra un momento oppure cerca nel catalogo.`)
};

const nl_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Probeer het zo opnieuw of zoek in de catalogus.`)
};

const pl_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spróbuj ponownie za chwilę albo przeszukaj katalog.`)
};

const pt_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenta outra vez daqui a pouco ou pesquisa no catálogo.`)
};

const ru_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторите попытку чуть позже или поищите в каталоге.`)
};

const sv_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen om en stund eller sök i katalogen.`)
};

const tr_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biraz sonra tekrar dene ya da kataloğda ara.`)
};

const zh_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍后重试，或直接搜索目录。`)
};

const ja_cmdk_scout_error_hint = /** @type {(inputs: Cmdk_Scout_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`しばらくしてからもう一度試すか、カタログを検索してください。`)
};

/**
* | output |
* | --- |
* | "Try again in a moment, or search the catalog instead." |
*
* @param {Cmdk_Scout_Error_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_error_hint = /** @type {((inputs?: Cmdk_Scout_Error_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Error_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_error_hint(inputs)
	if (locale === "de") return de_cmdk_scout_error_hint(inputs)
	if (locale === "fr") return fr_cmdk_scout_error_hint(inputs)
	if (locale === "it") return it_cmdk_scout_error_hint(inputs)
	if (locale === "nl") return nl_cmdk_scout_error_hint(inputs)
	if (locale === "pl") return pl_cmdk_scout_error_hint(inputs)
	if (locale === "pt") return pt_cmdk_scout_error_hint(inputs)
	if (locale === "ru") return ru_cmdk_scout_error_hint(inputs)
	if (locale === "sv") return sv_cmdk_scout_error_hint(inputs)
	if (locale === "tr") return tr_cmdk_scout_error_hint(inputs)
	if (locale === "zh") return zh_cmdk_scout_error_hint(inputs)
	if (locale === "ja") return ja_cmdk_scout_error_hint(inputs)
	return en_cmdk_scout_error_hint(inputs)
});

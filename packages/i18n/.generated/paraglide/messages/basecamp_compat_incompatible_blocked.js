/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_BlockedInputs */

const en_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This mod or one of its dependencies`)
};

const es_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod o una de sus dependencias`)
};

const de_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Mod oder eine seiner Abhängigkeiten`)
};

const fr_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mod ou l’une de ses dépendances`)
};

const it_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo mod o una sua dipendenza`)
};

const nl_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze mod of een van zijn afhankelijkheden`)
};

const pl_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod lub jedna z jego zależności`)
};

const pt_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este mod ou uma de suas dependências`)
};

const ru_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот мод или его зависимость`)
};

const sv_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här modden eller ett av dess beroenden`)
};

const tr_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu mod veya bağımlılıklarından biri`)
};

const zh_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此模组或其依赖项`)
};

const ja_basecamp_compat_incompatible_blocked = /** @type {(inputs: Basecamp_Compat_Incompatible_BlockedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このModまたはその依存先`)
};

/**
* | output |
* | --- |
* | "This mod or one of its dependencies" |
*
* @param {Basecamp_Compat_Incompatible_BlockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_blocked = /** @type {((inputs?: Basecamp_Compat_Incompatible_BlockedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_BlockedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_blocked(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_blocked(inputs)
	return en_basecamp_compat_incompatible_blocked(inputs)
});

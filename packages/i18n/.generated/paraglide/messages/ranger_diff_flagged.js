/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Diff_FlaggedInputs */

const en_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`executable`)
};

const es_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ejecutable`)
};

const de_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ausführbar`)
};

const fr_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`exécutable`)
};

const it_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`eseguibile`)
};

const nl_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`uitvoerbaar`)
};

const pl_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`wykonywalny`)
};

const pt_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`executável`)
};

const ru_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`исполняемый`)
};

const sv_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`körbar`)
};

const tr_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`çalıştırılabilir`)
};

const zh_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可执行`)
};

const ja_ranger_diff_flagged = /** @type {(inputs: Ranger_Diff_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行ファイル`)
};

/**
* | output |
* | --- |
* | "executable" |
*
* @param {Ranger_Diff_FlaggedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_flagged = /** @type {((inputs?: Ranger_Diff_FlaggedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_FlaggedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_flagged(inputs)
	if (locale === "de") return de_ranger_diff_flagged(inputs)
	if (locale === "fr") return fr_ranger_diff_flagged(inputs)
	if (locale === "it") return it_ranger_diff_flagged(inputs)
	if (locale === "nl") return nl_ranger_diff_flagged(inputs)
	if (locale === "pl") return pl_ranger_diff_flagged(inputs)
	if (locale === "pt") return pt_ranger_diff_flagged(inputs)
	if (locale === "ru") return ru_ranger_diff_flagged(inputs)
	if (locale === "sv") return sv_ranger_diff_flagged(inputs)
	if (locale === "tr") return tr_ranger_diff_flagged(inputs)
	if (locale === "zh") return zh_ranger_diff_flagged(inputs)
	if (locale === "ja") return ja_ranger_diff_flagged(inputs)
	return en_ranger_diff_flagged(inputs)
});

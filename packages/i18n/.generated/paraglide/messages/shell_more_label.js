/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_More_LabelInputs */

const en_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More`)
};

const es_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más`)
};

const de_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr`)
};

const fr_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus`)
};

const it_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer`)
};

const pl_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej`)
};

const pt_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais`)
};

const ru_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё`)
};

const sv_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mer`)
};

const tr_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla`)
};

const zh_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多`)
};

const ja_shell_more_label = /** @type {(inputs: Shell_More_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "More" |
*
* @param {Shell_More_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_more_label = /** @type {((inputs?: Shell_More_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_More_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_more_label(inputs)
	if (locale === "de") return de_shell_more_label(inputs)
	if (locale === "fr") return fr_shell_more_label(inputs)
	if (locale === "it") return it_shell_more_label(inputs)
	if (locale === "nl") return nl_shell_more_label(inputs)
	if (locale === "pl") return pl_shell_more_label(inputs)
	if (locale === "pt") return pt_shell_more_label(inputs)
	if (locale === "ru") return ru_shell_more_label(inputs)
	if (locale === "sv") return sv_shell_more_label(inputs)
	if (locale === "tr") return tr_shell_more_label(inputs)
	if (locale === "zh") return zh_shell_more_label(inputs)
	if (locale === "ja") return ja_shell_more_label(inputs)
	return en_shell_more_label(inputs)
});

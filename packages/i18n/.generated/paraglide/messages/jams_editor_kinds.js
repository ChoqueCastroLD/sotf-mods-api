/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_KindsInputs */

const en_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allowed entries`)
};

const es_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participaciones permitidas`)
};

const de_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erlaubte Beiträge`)
};

const fr_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participations autorisées`)
};

const it_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizioni consentite`)
};

const nl_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegestane inzendingen`)
};

const pl_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dozwolone zgłoszenia`)
};

const pt_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrições permitidas`)
};

const ru_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Допустимые работы`)
};

const sv_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillåtna bidrag`)
};

const tr_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İzin verilen başvurular`)
};

const zh_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许的作品类型`)
};

const ja_jams_editor_kinds = /** @type {(inputs: Jams_Editor_KindsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募できる作品`)
};

/**
* | output |
* | --- |
* | "Allowed entries" |
*
* @param {Jams_Editor_KindsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_kinds = /** @type {((inputs?: Jams_Editor_KindsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_KindsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_kinds(inputs)
	if (locale === "de") return de_jams_editor_kinds(inputs)
	if (locale === "fr") return fr_jams_editor_kinds(inputs)
	if (locale === "it") return it_jams_editor_kinds(inputs)
	if (locale === "nl") return nl_jams_editor_kinds(inputs)
	if (locale === "pl") return pl_jams_editor_kinds(inputs)
	if (locale === "pt") return pt_jams_editor_kinds(inputs)
	if (locale === "ru") return ru_jams_editor_kinds(inputs)
	if (locale === "sv") return sv_jams_editor_kinds(inputs)
	if (locale === "tr") return tr_jams_editor_kinds(inputs)
	if (locale === "zh") return zh_jams_editor_kinds(inputs)
	if (locale === "ja") return ja_jams_editor_kinds(inputs)
	return en_jams_editor_kinds(inputs)
});

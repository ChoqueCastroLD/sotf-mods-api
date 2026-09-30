/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_UnknownInputs */

const en_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not recorded`)
};

const es_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin registrar`)
};

const de_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht erfasst`)
};

const fr_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non renseigné`)
};

const it_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non registrato`)
};

const nl_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet vastgelegd`)
};

const pl_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak danych`)
};

const pt_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não registrado`)
};

const ru_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет данных`)
};

const sv_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte registrerat`)
};

const tr_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıtlı değil`)
};

const zh_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未记录`)
};

const ja_builds_spec_unknown = /** @type {(inputs: Builds_Spec_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`記録なし`)
};

/**
* | output |
* | --- |
* | "Not recorded" |
*
* @param {Builds_Spec_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_unknown = /** @type {((inputs?: Builds_Spec_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_unknown(inputs)
	if (locale === "de") return de_builds_spec_unknown(inputs)
	if (locale === "fr") return fr_builds_spec_unknown(inputs)
	if (locale === "it") return it_builds_spec_unknown(inputs)
	if (locale === "nl") return nl_builds_spec_unknown(inputs)
	if (locale === "pl") return pl_builds_spec_unknown(inputs)
	if (locale === "pt") return pt_builds_spec_unknown(inputs)
	if (locale === "ru") return ru_builds_spec_unknown(inputs)
	if (locale === "sv") return sv_builds_spec_unknown(inputs)
	if (locale === "tr") return tr_builds_spec_unknown(inputs)
	if (locale === "zh") return zh_builds_spec_unknown(inputs)
	if (locale === "ja") return ja_builds_spec_unknown(inputs)
	return en_builds_spec_unknown(inputs)
});

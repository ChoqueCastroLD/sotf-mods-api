/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_Guid_CopiedInputs */

const en_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID copied.`)
};

const es_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID copiado.`)
};

const de_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID kopiert.`)
};

const fr_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID copié.`)
};

const it_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID copiato.`)
};

const nl_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID gekopieerd.`)
};

const pl_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano GUID.`)
};

const pt_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID copiado.`)
};

const ru_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID скопирован.`)
};

const sv_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID kopierat.`)
};

const tr_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID kopyalandı.`)
};

const zh_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID 已复制。`)
};

const ja_builds_spec_guid_copied = /** @type {(inputs: Builds_Spec_Guid_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GUID をコピーしました。`)
};

/**
* | output |
* | --- |
* | "GUID copied." |
*
* @param {Builds_Spec_Guid_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_guid_copied = /** @type {((inputs?: Builds_Spec_Guid_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_Guid_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_guid_copied(inputs)
	if (locale === "de") return de_builds_spec_guid_copied(inputs)
	if (locale === "fr") return fr_builds_spec_guid_copied(inputs)
	if (locale === "it") return it_builds_spec_guid_copied(inputs)
	if (locale === "nl") return nl_builds_spec_guid_copied(inputs)
	if (locale === "pl") return pl_builds_spec_guid_copied(inputs)
	if (locale === "pt") return pt_builds_spec_guid_copied(inputs)
	if (locale === "ru") return ru_builds_spec_guid_copied(inputs)
	if (locale === "sv") return sv_builds_spec_guid_copied(inputs)
	if (locale === "tr") return tr_builds_spec_guid_copied(inputs)
	if (locale === "zh") return zh_builds_spec_guid_copied(inputs)
	if (locale === "ja") return ja_builds_spec_guid_copied(inputs)
	return en_builds_spec_guid_copied(inputs)
});

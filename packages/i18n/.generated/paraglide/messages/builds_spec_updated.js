/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_UpdatedInputs */

const en_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

const es_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizada`)
};

const de_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisiert`)
};

const fr_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour`)
};

const it_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornata`)
};

const nl_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijgewerkt`)
};

const pl_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizowano`)
};

const pt_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizada`)
};

const ru_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлено`)
};

const sv_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterat`)
};

const tr_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellendi`)
};

const zh_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新于`)
};

const ja_builds_spec_updated = /** @type {(inputs: Builds_Spec_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Builds_Spec_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_updated = /** @type {((inputs?: Builds_Spec_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_updated(inputs)
	if (locale === "de") return de_builds_spec_updated(inputs)
	if (locale === "fr") return fr_builds_spec_updated(inputs)
	if (locale === "it") return it_builds_spec_updated(inputs)
	if (locale === "nl") return nl_builds_spec_updated(inputs)
	if (locale === "pl") return pl_builds_spec_updated(inputs)
	if (locale === "pt") return pt_builds_spec_updated(inputs)
	if (locale === "ru") return ru_builds_spec_updated(inputs)
	if (locale === "sv") return sv_builds_spec_updated(inputs)
	if (locale === "tr") return tr_builds_spec_updated(inputs)
	if (locale === "zh") return zh_builds_spec_updated(inputs)
	if (locale === "ja") return ja_builds_spec_updated(inputs)
	return en_builds_spec_updated(inputs)
});

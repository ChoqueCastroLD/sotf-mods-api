/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Landing_Pin_ReleaseInputs */

const en_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Updated to v${i?.version}`)
};

const es_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizado a v${i?.version}`)
};

const de_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualisiert auf v${i?.version}`)
};

const fr_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mis à jour en v${i?.version}`)
};

const it_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornata alla v${i?.version}`)
};

const nl_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt naar v${i?.version}`)
};

const pl_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaktualizowano do v${i?.version}`)
};

const pt_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado para v${i?.version}`)
};

const ru_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлён до v${i?.version}`)
};

const sv_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad till v${i?.version}`)
};

const tr_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} sürümüne güncellendi`)
};

const zh_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已更新至 v${i?.version}`)
};

const ja_landing_pin_release = /** @type {(inputs: Landing_Pin_ReleaseInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} に更新`)
};

/**
* | output |
* | --- |
* | "Updated to v{version}" |
*
* @param {Landing_Pin_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_pin_release = /** @type {((inputs: Landing_Pin_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Pin_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_pin_release(inputs)
	if (locale === "de") return de_landing_pin_release(inputs)
	if (locale === "fr") return fr_landing_pin_release(inputs)
	if (locale === "it") return it_landing_pin_release(inputs)
	if (locale === "nl") return nl_landing_pin_release(inputs)
	if (locale === "pl") return pl_landing_pin_release(inputs)
	if (locale === "pt") return pt_landing_pin_release(inputs)
	if (locale === "ru") return ru_landing_pin_release(inputs)
	if (locale === "sv") return sv_landing_pin_release(inputs)
	if (locale === "tr") return tr_landing_pin_release(inputs)
	if (locale === "zh") return zh_landing_pin_release(inputs)
	if (locale === "ja") return ja_landing_pin_release(inputs)
	return en_landing_pin_release(inputs)
});

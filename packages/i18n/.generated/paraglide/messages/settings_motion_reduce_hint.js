/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Motion_Reduce_HintInputs */

const en_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No sliding, zooming or celebrations.`)
};

const es_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin deslizamientos, zooms ni celebraciones.`)
};

const de_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Gleiten, Zoomen oder Feiern.`)
};

const fr_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de glissements, de zooms ni de célébrations.`)
};

const it_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente scorrimenti, zoom o festeggiamenti.`)
};

const nl_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen schuiven, zoomen of feestjes.`)
};

const pl_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez przesuwania, powiększania i fajerwerków.`)
};

const pt_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem deslizes, zooms ou comemorações.`)
};

const ru_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без скольжения, масштабирования и празднований.`)
};

const sv_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga glidningar, zoomningar eller firanden.`)
};

const tr_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayma, yakınlaştırma ya da kutlama yok.`)
};

const zh_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不滑动、不缩放、不庆祝。`)
};

const ja_settings_motion_reduce_hint = /** @type {(inputs: Settings_Motion_Reduce_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スライド、ズーム、お祝い演出なし。`)
};

/**
* | output |
* | --- |
* | "No sliding, zooming or celebrations." |
*
* @param {Settings_Motion_Reduce_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_motion_reduce_hint = /** @type {((inputs?: Settings_Motion_Reduce_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Motion_Reduce_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_motion_reduce_hint(inputs)
	if (locale === "de") return de_settings_motion_reduce_hint(inputs)
	if (locale === "fr") return fr_settings_motion_reduce_hint(inputs)
	if (locale === "it") return it_settings_motion_reduce_hint(inputs)
	if (locale === "nl") return nl_settings_motion_reduce_hint(inputs)
	if (locale === "pl") return pl_settings_motion_reduce_hint(inputs)
	if (locale === "pt") return pt_settings_motion_reduce_hint(inputs)
	if (locale === "ru") return ru_settings_motion_reduce_hint(inputs)
	if (locale === "sv") return sv_settings_motion_reduce_hint(inputs)
	if (locale === "tr") return tr_settings_motion_reduce_hint(inputs)
	if (locale === "zh") return zh_settings_motion_reduce_hint(inputs)
	if (locale === "ja") return ja_settings_motion_reduce_hint(inputs)
	return en_settings_motion_reduce_hint(inputs)
});

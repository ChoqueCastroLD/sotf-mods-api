/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Step_Create_KitInputs */

const en_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build your first Kit`)
};

const es_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arma tu primer Kit`)
};

const de_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein erstes Kit zusammenstellen`)
};

const fr_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer votre premier Kit`)
};

const it_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea il tuo primo Kit`)
};

const nl_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stel je eerste Kit samen`)
};

const pl_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stwórz swój pierwszy zestaw`)
};

const pt_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monte seu primeiro Kit`)
};

const ru_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Собрать первый набор`)
};

const sv_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sätt ihop ditt första kit`)
};

const tr_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk kitini oluştur`)
};

const zh_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`组建你的第一个套装`)
};

const ja_landing_personal_step_create_kit = /** @type {(inputs: Landing_Personal_Step_Create_KitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のキットを作る`)
};

/**
* | output |
* | --- |
* | "Build your first Kit" |
*
* @param {Landing_Personal_Step_Create_KitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_create_kit = /** @type {((inputs?: Landing_Personal_Step_Create_KitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_Create_KitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_create_kit(inputs)
	if (locale === "de") return de_landing_personal_step_create_kit(inputs)
	if (locale === "fr") return fr_landing_personal_step_create_kit(inputs)
	if (locale === "it") return it_landing_personal_step_create_kit(inputs)
	if (locale === "nl") return nl_landing_personal_step_create_kit(inputs)
	if (locale === "pl") return pl_landing_personal_step_create_kit(inputs)
	if (locale === "pt") return pt_landing_personal_step_create_kit(inputs)
	if (locale === "ru") return ru_landing_personal_step_create_kit(inputs)
	if (locale === "sv") return sv_landing_personal_step_create_kit(inputs)
	if (locale === "tr") return tr_landing_personal_step_create_kit(inputs)
	if (locale === "zh") return zh_landing_personal_step_create_kit(inputs)
	if (locale === "ja") return ja_landing_personal_step_create_kit(inputs)
	return en_landing_personal_step_create_kit(inputs)
});

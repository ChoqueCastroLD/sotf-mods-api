/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ step: NonNullable<unknown>, total: NonNullable<unknown>, title: NonNullable<unknown> }} Social_Compat_Step_OfInputs */

const en_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Step ${i?.step} of ${i?.total}: ${i?.title}`)
};

const es_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Paso ${i?.step} de ${i?.total}: ${i?.title}`)
};

const de_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Schritt ${i?.step} von ${i?.total}: ${i?.title}`)
};

const fr_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Étape ${i?.step} sur ${i?.total} : ${i?.title}`)
};

const it_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Passaggio ${i?.step} di ${i?.total}: ${i?.title}`)
};

const nl_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stap ${i?.step} van ${i?.total}: ${i?.title}`)
};

const pl_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Krok ${i?.step} z ${i?.total}: ${i?.title}`)
};

const pt_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Etapa ${i?.step} de ${i?.total}: ${i?.title}`)
};

const ru_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Шаг ${i?.step} из ${i?.total}: ${i?.title}`)
};

const sv_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Steg ${i?.step} av ${i?.total}: ${i?.title}`)
};

const tr_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adım ${i?.step}/${i?.total}: ${i?.title}`)
};

const zh_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.step} 步，共 ${i?.total} 步：${i?.title}`)
};

const ja_social_compat_step_of = /** @type {(inputs: Social_Compat_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ステップ ${i?.step}/${i?.total}：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Step {step} of {total}: {title}" |
*
* @param {Social_Compat_Step_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_step_of = /** @type {((inputs: Social_Compat_Step_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Step_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_step_of(inputs)
	if (locale === "de") return de_social_compat_step_of(inputs)
	if (locale === "fr") return fr_social_compat_step_of(inputs)
	if (locale === "it") return it_social_compat_step_of(inputs)
	if (locale === "nl") return nl_social_compat_step_of(inputs)
	if (locale === "pl") return pl_social_compat_step_of(inputs)
	if (locale === "pt") return pt_social_compat_step_of(inputs)
	if (locale === "ru") return ru_social_compat_step_of(inputs)
	if (locale === "sv") return sv_social_compat_step_of(inputs)
	if (locale === "tr") return tr_social_compat_step_of(inputs)
	if (locale === "zh") return zh_social_compat_step_of(inputs)
	if (locale === "ja") return ja_social_compat_step_of(inputs)
	return en_social_compat_step_of(inputs)
});

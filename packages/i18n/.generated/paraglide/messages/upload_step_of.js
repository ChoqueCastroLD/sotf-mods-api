/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Upload_Step_OfInputs */

const en_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Step ${i?.current} of ${i?.total}`)
};

const es_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Paso ${i?.current} de ${i?.total}`)
};

const de_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Schritt ${i?.current} von ${i?.total}`)
};

const fr_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Étape ${i?.current} sur ${i?.total}`)
};

const it_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Passaggio ${i?.current} di ${i?.total}`)
};

const nl_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stap ${i?.current} van ${i?.total}`)
};

const pl_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Krok ${i?.current} z ${i?.total}`)
};

const pt_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Etapa ${i?.current} de ${i?.total}`)
};

const ru_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Шаг ${i?.current} из ${i?.total}`)
};

const sv_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Steg ${i?.current} av ${i?.total}`)
};

const tr_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adım ${i?.current} / ${i?.total}`)
};

const zh_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.current} 步，共 ${i?.total} 步`)
};

const ja_upload_step_of = /** @type {(inputs: Upload_Step_OfInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ステップ ${i?.current}/${i?.total}`)
};

/**
* | output |
* | --- |
* | "Step {current} of {total}" |
*
* @param {Upload_Step_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_step_of = /** @type {((inputs: Upload_Step_OfInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Step_OfInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_step_of(inputs)
	if (locale === "de") return de_upload_step_of(inputs)
	if (locale === "fr") return fr_upload_step_of(inputs)
	if (locale === "it") return it_upload_step_of(inputs)
	if (locale === "nl") return nl_upload_step_of(inputs)
	if (locale === "pl") return pl_upload_step_of(inputs)
	if (locale === "pt") return pt_upload_step_of(inputs)
	if (locale === "ru") return ru_upload_step_of(inputs)
	if (locale === "sv") return sv_upload_step_of(inputs)
	if (locale === "tr") return tr_upload_step_of(inputs)
	if (locale === "zh") return zh_upload_step_of(inputs)
	if (locale === "ja") return ja_upload_step_of(inputs)
	return en_upload_step_of(inputs)
});

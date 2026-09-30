/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown>, label: NonNullable<unknown> }} Upload_Drafts_StepInputs */

const en_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Step ${i?.current} of ${i?.total} · ${i?.label}`)
};

const es_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Paso ${i?.current} de ${i?.total} · ${i?.label}`)
};

const de_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Schritt ${i?.current} von ${i?.total} · ${i?.label}`)
};

const fr_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Étape ${i?.current} sur ${i?.total} · ${i?.label}`)
};

const it_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Passaggio ${i?.current} di ${i?.total} · ${i?.label}`)
};

const nl_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stap ${i?.current} van ${i?.total} · ${i?.label}`)
};

const pl_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Krok ${i?.current} z ${i?.total} · ${i?.label}`)
};

const pt_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Etapa ${i?.current} de ${i?.total} · ${i?.label}`)
};

const ru_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Шаг ${i?.current} из ${i?.total} · ${i?.label}`)
};

const sv_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Steg ${i?.current} av ${i?.total} · ${i?.label}`)
};

const tr_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Adım ${i?.current} / ${i?.total} · ${i?.label}`)
};

const zh_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.current}/${i?.total} 步 · ${i?.label}`)
};

const ja_upload_drafts_step = /** @type {(inputs: Upload_Drafts_StepInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ステップ ${i?.current}/${i?.total} · ${i?.label}`)
};

/**
* | output |
* | --- |
* | "Step {current} of {total} · {label}" |
*
* @param {Upload_Drafts_StepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_step = /** @type {((inputs: Upload_Drafts_StepInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_StepInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_step(inputs)
	if (locale === "de") return de_upload_drafts_step(inputs)
	if (locale === "fr") return fr_upload_drafts_step(inputs)
	if (locale === "it") return it_upload_drafts_step(inputs)
	if (locale === "nl") return nl_upload_drafts_step(inputs)
	if (locale === "pl") return pl_upload_drafts_step(inputs)
	if (locale === "pt") return pt_upload_drafts_step(inputs)
	if (locale === "ru") return ru_upload_drafts_step(inputs)
	if (locale === "sv") return sv_upload_drafts_step(inputs)
	if (locale === "tr") return tr_upload_drafts_step(inputs)
	if (locale === "zh") return zh_upload_drafts_step(inputs)
	if (locale === "ja") return ja_upload_drafts_step(inputs)
	return en_upload_drafts_step(inputs)
});

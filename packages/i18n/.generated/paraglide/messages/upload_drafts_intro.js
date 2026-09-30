/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Upload_Drafts_IntroInputs */

const en_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autosaved as you go. Up to ${i?.max} drafts at a time.`)
};

const es_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se guardan solos mientras avanzas. Hasta ${i?.max} borradores a la vez.`)
};

const de_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wird automatisch gespeichert. Bis zu ${i?.max} Entwürfe gleichzeitig.`)
};

const fr_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enregistrés automatiquement au fil de l’eau. Jusqu’à ${i?.max} brouillons à la fois.`)
};

const it_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Salvate automaticamente mentre procedi. Fino a ${i?.max} bozze alla volta.`)
};

const nl_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Automatisch opgeslagen terwijl je werkt. Tot ${i?.max} concepten tegelijk.`)
};

const pl_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zapisywane automatycznie w trakcie pracy. Do ${i?.max} szkiców naraz.`)
};

const pt_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Salvos automaticamente enquanto você avança. Até ${i?.max} rascunhos por vez.`)
};

const ru_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сохраняются автоматически по ходу работы. Не больше ${i?.max} черновиков одновременно.`)
};

const sv_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sparas automatiskt medan du arbetar. Upp till ${i?.max} utkast åt gången.`)
};

const tr_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sen ilerledikçe otomatik kaydedilir. Aynı anda en fazla ${i?.max} taslak.`)
};

const zh_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑时自动保存。最多同时保留 ${i?.max} 个草稿。`)
};

const ja_upload_drafts_intro = /** @type {(inputs: Upload_Drafts_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`作業中は自動で保存されます。同時に最大 ${i?.max} 件まで。`)
};

/**
* | output |
* | --- |
* | "Autosaved as you go. Up to {max} drafts at a time." |
*
* @param {Upload_Drafts_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_intro = /** @type {((inputs: Upload_Drafts_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_intro(inputs)
	if (locale === "de") return de_upload_drafts_intro(inputs)
	if (locale === "fr") return fr_upload_drafts_intro(inputs)
	if (locale === "it") return it_upload_drafts_intro(inputs)
	if (locale === "nl") return nl_upload_drafts_intro(inputs)
	if (locale === "pl") return pl_upload_drafts_intro(inputs)
	if (locale === "pt") return pt_upload_drafts_intro(inputs)
	if (locale === "ru") return ru_upload_drafts_intro(inputs)
	if (locale === "sv") return sv_upload_drafts_intro(inputs)
	if (locale === "tr") return tr_upload_drafts_intro(inputs)
	if (locale === "zh") return zh_upload_drafts_intro(inputs)
	if (locale === "ja") return ja_upload_drafts_intro(inputs)
	return en_upload_drafts_intro(inputs)
});

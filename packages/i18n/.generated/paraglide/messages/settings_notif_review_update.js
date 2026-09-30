/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Review_UpdateInputs */

const en_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review updates`)
};

const es_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizar reseñas`)
};

const de_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertungen aktualisieren`)
};

const fr_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour d’avis`)
};

const it_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamento recensioni`)
};

const nl_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review-updates`)
};

const pl_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacje recenzji`)
};

const pt_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizar avaliações`)
};

const ru_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновление отзывов`)
};

const sv_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensionsuppdateringar`)
};

const tr_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme güncellemeleri`)
};

const zh_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评价更新`)
};

const ja_settings_notif_review_update = /** @type {(inputs: Settings_Notif_Review_UpdateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューの更新`)
};

/**
* | output |
* | --- |
* | "Review updates" |
*
* @param {Settings_Notif_Review_UpdateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_review_update = /** @type {((inputs?: Settings_Notif_Review_UpdateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Review_UpdateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_review_update(inputs)
	if (locale === "de") return de_settings_notif_review_update(inputs)
	if (locale === "fr") return fr_settings_notif_review_update(inputs)
	if (locale === "it") return it_settings_notif_review_update(inputs)
	if (locale === "nl") return nl_settings_notif_review_update(inputs)
	if (locale === "pl") return pl_settings_notif_review_update(inputs)
	if (locale === "pt") return pt_settings_notif_review_update(inputs)
	if (locale === "ru") return ru_settings_notif_review_update(inputs)
	if (locale === "sv") return sv_settings_notif_review_update(inputs)
	if (locale === "tr") return tr_settings_notif_review_update(inputs)
	if (locale === "zh") return zh_settings_notif_review_update(inputs)
	if (locale === "ja") return ja_settings_notif_review_update(inputs)
	return en_settings_notif_review_update(inputs)
});

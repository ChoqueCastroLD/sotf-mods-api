/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Review_Update_HintInputs */

const en_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod you reviewed released a new major version.`)
};

const es_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod que reseñaste lanzó una nueva versión mayor.`)
};

const de_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod, den du bewertet hast, hat eine neue Hauptversion veröffentlicht.`)
};

const fr_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod que vous avez évalué a publié une nouvelle version majeure.`)
};

const it_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod che hai recensito ha rilasciato una nuova versione principale.`)
};

const nl_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod die je hebt beoordeeld, heeft een nieuwe hoofdversie uitgebracht.`)
};

const pl_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, który oceniłeś(-aś), wydał nową wersję główną.`)
};

const pt_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod que você avaliou lançou uma nova versão principal.`)
};

const ru_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод, на который вы оставили отзыв, выпустил новую мажорную версию.`)
};

const sv_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En mod du recenserat har släppt en ny huvudversion.`)
};

const tr_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelediğin bir mod yeni bir ana sürüm yayınladı.`)
};

const zh_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你评价过的模组发布了新的主要版本。`)
};

const ja_settings_notif_review_update_hint = /** @type {(inputs: Settings_Notif_Review_Update_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビューしたMODが新しいメジャーバージョンを公開しました。`)
};

/**
* | output |
* | --- |
* | "A mod you reviewed released a new major version." |
*
* @param {Settings_Notif_Review_Update_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_review_update_hint = /** @type {((inputs?: Settings_Notif_Review_Update_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Review_Update_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_review_update_hint(inputs)
	if (locale === "de") return de_settings_notif_review_update_hint(inputs)
	if (locale === "fr") return fr_settings_notif_review_update_hint(inputs)
	if (locale === "it") return it_settings_notif_review_update_hint(inputs)
	if (locale === "nl") return nl_settings_notif_review_update_hint(inputs)
	if (locale === "pl") return pl_settings_notif_review_update_hint(inputs)
	if (locale === "pt") return pt_settings_notif_review_update_hint(inputs)
	if (locale === "ru") return ru_settings_notif_review_update_hint(inputs)
	if (locale === "sv") return sv_settings_notif_review_update_hint(inputs)
	if (locale === "tr") return tr_settings_notif_review_update_hint(inputs)
	if (locale === "zh") return zh_settings_notif_review_update_hint(inputs)
	if (locale === "ja") return ja_settings_notif_review_update_hint(inputs)
	return en_settings_notif_review_update_hint(inputs)
});

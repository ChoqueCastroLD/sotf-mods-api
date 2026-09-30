/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_On_SavedInputs */

const en_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mature content is now shown`)
};

const es_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora se muestra el contenido adulto`)
};

const de_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene werden jetzt angezeigt`)
};

const fr_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le contenu pour adultes est maintenant affiché`)
};

const it_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ora i contenuti per adulti sono visibili`)
};

const nl_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen wordt nu getoond`)
};

const pl_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treści dla dorosłych są teraz widoczne`)
};

const pt_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O conteúdo adulto agora está visível`)
};

const ru_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Контент для взрослых теперь показывается`)
};

const sv_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuxeninnehåll visas nu`)
};

const tr_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içerik artık gösteriliyor`)
};

const zh_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`现在会显示成人内容`)
};

const ja_settings_nsfw_on_saved = /** @type {(inputs: Settings_Nsfw_On_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツを表示するようにしました`)
};

/**
* | output |
* | --- |
* | "Mature content is now shown" |
*
* @param {Settings_Nsfw_On_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_on_saved = /** @type {((inputs?: Settings_Nsfw_On_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_On_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_on_saved(inputs)
	if (locale === "de") return de_settings_nsfw_on_saved(inputs)
	if (locale === "fr") return fr_settings_nsfw_on_saved(inputs)
	if (locale === "it") return it_settings_nsfw_on_saved(inputs)
	if (locale === "nl") return nl_settings_nsfw_on_saved(inputs)
	if (locale === "pl") return pl_settings_nsfw_on_saved(inputs)
	if (locale === "pt") return pt_settings_nsfw_on_saved(inputs)
	if (locale === "ru") return ru_settings_nsfw_on_saved(inputs)
	if (locale === "sv") return sv_settings_nsfw_on_saved(inputs)
	if (locale === "tr") return tr_settings_nsfw_on_saved(inputs)
	if (locale === "zh") return zh_settings_nsfw_on_saved(inputs)
	if (locale === "ja") return ja_settings_nsfw_on_saved(inputs)
	return en_settings_nsfw_on_saved(inputs)
});

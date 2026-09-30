/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Version_HintInputs */

const en_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod in your backpack released an update.`)
};

const es_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod de tu mochila ha publicado una actualización.`)
};

const de_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Mod in deinem Rucksack hat ein Update veröffentlicht.`)
};

const fr_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod de votre sac à dos a publié une mise à jour.`)
};

const it_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una mod del tuo zaino ha pubblicato un aggiornamento.`)
};

const nl_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod in je rugzak heeft een update uitgebracht.`)
};

const pl_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod z twojego plecaka dostał aktualizację.`)
};

const pt_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod da sua mochila lançou uma atualização.`)
};

const ru_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод из вашего рюкзака получил обновление.`)
};

const sv_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En modd i din ryggsäck har släppt en uppdatering.`)
};

const tr_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırt çantandaki bir mod güncelleme yayımladı.`)
};

const zh_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你背包中的某个模组发布了更新。`)
};

const ja_settings_notif_version_hint = /** @type {(inputs: Settings_Notif_Version_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バックパックのMODがアップデートを公開しました。`)
};

/**
* | output |
* | --- |
* | "A mod in your backpack released an update." |
*
* @param {Settings_Notif_Version_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_version_hint = /** @type {((inputs?: Settings_Notif_Version_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Version_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_version_hint(inputs)
	if (locale === "de") return de_settings_notif_version_hint(inputs)
	if (locale === "fr") return fr_settings_notif_version_hint(inputs)
	if (locale === "it") return it_settings_notif_version_hint(inputs)
	if (locale === "nl") return nl_settings_notif_version_hint(inputs)
	if (locale === "pl") return pl_settings_notif_version_hint(inputs)
	if (locale === "pt") return pt_settings_notif_version_hint(inputs)
	if (locale === "ru") return ru_settings_notif_version_hint(inputs)
	if (locale === "sv") return sv_settings_notif_version_hint(inputs)
	if (locale === "tr") return tr_settings_notif_version_hint(inputs)
	if (locale === "zh") return zh_settings_notif_version_hint(inputs)
	if (locale === "ja") return ja_settings_notif_version_hint(inputs)
	return en_settings_notif_version_hint(inputs)
});

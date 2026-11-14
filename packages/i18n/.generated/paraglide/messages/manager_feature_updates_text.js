/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Updates_TextInputs */

const en_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`See which mods have a new version and update them with one button.`)
};

const es_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mira qué mods tienen una versión nueva y actualízalos con un botón.`)
};

const de_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sieh, welche Mods eine neue Version haben, und aktualisiere sie mit einem Klick.`)
};

const fr_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voyez quels mods ont une nouvelle version et mettez-les à jour d’un bouton.`)
};

const it_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi quali mod hanno una nuova versione e aggiornale con un pulsante.`)
};

const nl_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zie welke mods een nieuwe versie hebben en werk ze bij met één knop.`)
};

const pl_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz, które mody mają nową wersję, i zaktualizuj je jednym przyciskiem.`)
};

const pt_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veja quais mods têm uma versão nova e atualize-os com um botão.`)
};

const ru_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотрите, у каких модов вышла новая версия, и обновляйте их одной кнопкой.`)
};

const sv_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se vilka moddar som har en ny version och uppdatera dem med en knapp.`)
};

const tr_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hangi modların yeni sürümü olduğunu gör ve tek düğmeyle güncelle.`)
};

const zh_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看哪些模组有新版本，一键更新。`)
};

const ja_manager_feature_updates_text = /** @type {(inputs: Manager_Feature_Updates_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバージョンがある Mod を確認し、ボタンひとつで更新できます。`)
};

/**
* | output |
* | --- |
* | "See which mods have a new version and update them with one button." |
*
* @param {Manager_Feature_Updates_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_updates_text = /** @type {((inputs?: Manager_Feature_Updates_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Updates_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_updates_text(inputs)
	if (locale === "de") return de_manager_feature_updates_text(inputs)
	if (locale === "fr") return fr_manager_feature_updates_text(inputs)
	if (locale === "it") return it_manager_feature_updates_text(inputs)
	if (locale === "nl") return nl_manager_feature_updates_text(inputs)
	if (locale === "pl") return pl_manager_feature_updates_text(inputs)
	if (locale === "pt") return pt_manager_feature_updates_text(inputs)
	if (locale === "ru") return ru_manager_feature_updates_text(inputs)
	if (locale === "sv") return sv_manager_feature_updates_text(inputs)
	if (locale === "tr") return tr_manager_feature_updates_text(inputs)
	if (locale === "zh") return zh_manager_feature_updates_text(inputs)
	if (locale === "ja") return ja_manager_feature_updates_text(inputs)
	return en_manager_feature_updates_text(inputs)
});

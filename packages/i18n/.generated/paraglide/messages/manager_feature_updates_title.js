/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Updates_TitleInputs */

const en_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates at a glance`)
};

const es_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizaciones de un vistazo`)
};

const de_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates auf einen Blick`)
};

const fr_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour en un coup d’œil`)
};

const it_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamenti a colpo d’occhio`)
};

const nl_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates in één oogopslag`)
};

const pl_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacje w zasięgu wzroku`)
};

const pt_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizações de relance`)
};

const ru_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновления сразу видны`)
};

const sv_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringar i en blick`)
};

const tr_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemeler tek bakışta`)
};

const zh_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新一目了然`)
};

const ja_manager_feature_updates_title = /** @type {(inputs: Manager_Feature_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新がひと目でわかる`)
};

/**
* | output |
* | --- |
* | "Updates at a glance" |
*
* @param {Manager_Feature_Updates_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_updates_title = /** @type {((inputs?: Manager_Feature_Updates_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Updates_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_updates_title(inputs)
	if (locale === "de") return de_manager_feature_updates_title(inputs)
	if (locale === "fr") return fr_manager_feature_updates_title(inputs)
	if (locale === "it") return it_manager_feature_updates_title(inputs)
	if (locale === "nl") return nl_manager_feature_updates_title(inputs)
	if (locale === "pl") return pl_manager_feature_updates_title(inputs)
	if (locale === "pt") return pt_manager_feature_updates_title(inputs)
	if (locale === "ru") return ru_manager_feature_updates_title(inputs)
	if (locale === "sv") return sv_manager_feature_updates_title(inputs)
	if (locale === "tr") return tr_manager_feature_updates_title(inputs)
	if (locale === "zh") return zh_manager_feature_updates_title(inputs)
	if (locale === "ja") return ja_manager_feature_updates_title(inputs)
	return en_manager_feature_updates_title(inputs)
});

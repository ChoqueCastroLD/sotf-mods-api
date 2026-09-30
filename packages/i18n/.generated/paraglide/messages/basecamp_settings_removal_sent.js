/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Removal_SentInputs */

const en_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Removal requested: the rangers will review it`)
};

const es_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada pedida: los guardabosques la revisarán`)
};

const de_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entfernung beantragt: die Ranger prüfen sie`)
};

const fr_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retrait demandé : les rangers vont l’examiner`)
};

const it_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimozione richiesta: i ranger la esamineranno`)
};

const nl_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering aangevraagd: de rangers bekijken het`)
};

const pl_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproszono o usunięcie: strażnicy to rozpatrzą`)
};

const pt_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remoção pedida: os guardas vão analisar`)
};

const ru_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление запрошено: рейнджеры его рассмотрят`)
};

const sv_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borttagning begärd: rangers granskar den`)
};

const tr_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldırma istendi: korucular inceleyecek`)
};

const zh_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已申请下架：护林员会进行审核`)
};

const ja_basecamp_settings_removal_sent = /** @type {(inputs: Basecamp_Settings_Removal_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を依頼しました：レンジャーが確認します`)
};

/**
* | output |
* | --- |
* | "Removal requested: the rangers will review it" |
*
* @param {Basecamp_Settings_Removal_SentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removal_sent = /** @type {((inputs?: Basecamp_Settings_Removal_SentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_SentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removal_sent(inputs)
	if (locale === "de") return de_basecamp_settings_removal_sent(inputs)
	if (locale === "fr") return fr_basecamp_settings_removal_sent(inputs)
	if (locale === "it") return it_basecamp_settings_removal_sent(inputs)
	if (locale === "nl") return nl_basecamp_settings_removal_sent(inputs)
	if (locale === "pl") return pl_basecamp_settings_removal_sent(inputs)
	if (locale === "pt") return pt_basecamp_settings_removal_sent(inputs)
	if (locale === "ru") return ru_basecamp_settings_removal_sent(inputs)
	if (locale === "sv") return sv_basecamp_settings_removal_sent(inputs)
	if (locale === "tr") return tr_basecamp_settings_removal_sent(inputs)
	if (locale === "zh") return zh_basecamp_settings_removal_sent(inputs)
	if (locale === "ja") return ja_basecamp_settings_removal_sent(inputs)
	return en_basecamp_settings_removal_sent(inputs)
});

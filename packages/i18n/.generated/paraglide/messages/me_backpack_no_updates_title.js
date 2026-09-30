/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_No_Updates_TitleInputs */

const en_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything is up to date`)
};

const es_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo está al día`)
};

const de_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles ist aktuell`)
};

const fr_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout est à jour`)
};

const it_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto è aggiornato`)
};

const nl_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles is bijgewerkt`)
};

const pl_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko jest aktualne`)
};

const pt_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo está atualizado`)
};

const ru_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё актуально`)
};

const sv_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt är uppdaterat`)
};

const tr_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her şey güncel`)
};

const zh_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部已是最新`)
};

const ja_me_backpack_no_updates_title = /** @type {(inputs: Me_Backpack_No_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて最新です`)
};

/**
* | output |
* | --- |
* | "Everything is up to date" |
*
* @param {Me_Backpack_No_Updates_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_no_updates_title = /** @type {((inputs?: Me_Backpack_No_Updates_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_No_Updates_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_no_updates_title(inputs)
	if (locale === "de") return de_me_backpack_no_updates_title(inputs)
	if (locale === "fr") return fr_me_backpack_no_updates_title(inputs)
	if (locale === "it") return it_me_backpack_no_updates_title(inputs)
	if (locale === "nl") return nl_me_backpack_no_updates_title(inputs)
	if (locale === "pl") return pl_me_backpack_no_updates_title(inputs)
	if (locale === "pt") return pt_me_backpack_no_updates_title(inputs)
	if (locale === "ru") return ru_me_backpack_no_updates_title(inputs)
	if (locale === "sv") return sv_me_backpack_no_updates_title(inputs)
	if (locale === "tr") return tr_me_backpack_no_updates_title(inputs)
	if (locale === "zh") return zh_me_backpack_no_updates_title(inputs)
	if (locale === "ja") return ja_me_backpack_no_updates_title(inputs)
	return en_me_backpack_no_updates_title(inputs)
});

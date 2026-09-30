/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_Open_Empty_TitleInputs */

const en_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No jam is taking entries`)
};

const es_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ningún jam admite participaciones`)
};

const de_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Jam nimmt Beiträge an`)
};

const fr_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun jam n'accepte de participations`)
};

const it_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun jam accetta iscrizioni`)
};

const nl_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen jam neemt inzendingen aan`)
};

const pl_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden jam nie przyjmuje zgłoszeń`)
};

const pt_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum jam aceita inscrições`)
};

const ru_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сейчас ни один джем не принимает работы`)
};

const sv_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen jam tar emot bidrag`)
};

const tr_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru alan jam yok`)
};

const zh_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目前没有接受投稿的 Jam`)
};

const ja_jams_mine_open_empty_title = /** @type {(inputs: Jams_Mine_Open_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募受付中のジャムはありません`)
};

/**
* | output |
* | --- |
* | "No jam is taking entries" |
*
* @param {Jams_Mine_Open_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_open_empty_title = /** @type {((inputs?: Jams_Mine_Open_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_Open_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_open_empty_title(inputs)
	if (locale === "de") return de_jams_mine_open_empty_title(inputs)
	if (locale === "fr") return fr_jams_mine_open_empty_title(inputs)
	if (locale === "it") return it_jams_mine_open_empty_title(inputs)
	if (locale === "nl") return nl_jams_mine_open_empty_title(inputs)
	if (locale === "pl") return pl_jams_mine_open_empty_title(inputs)
	if (locale === "pt") return pt_jams_mine_open_empty_title(inputs)
	if (locale === "ru") return ru_jams_mine_open_empty_title(inputs)
	if (locale === "sv") return sv_jams_mine_open_empty_title(inputs)
	if (locale === "tr") return tr_jams_mine_open_empty_title(inputs)
	if (locale === "zh") return zh_jams_mine_open_empty_title(inputs)
	if (locale === "ja") return ja_jams_mine_open_empty_title(inputs)
	return en_jams_mine_open_empty_title(inputs)
});

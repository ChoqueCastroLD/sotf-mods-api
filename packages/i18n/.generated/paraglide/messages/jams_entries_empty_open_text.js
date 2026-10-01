/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Empty_Open_TextInputs */

const en_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entries appear here the moment someone submits one.`)
};

const es_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las participaciones aparecen aquí en cuanto alguien envía una.`)
};

const de_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beiträge erscheinen hier, sobald jemand einen einreicht.`)
};

const fr_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les participations apparaissent ici dès que quelqu'un en envoie une.`)
};

const it_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le iscrizioni compaiono qui appena qualcuno ne invia una.`)
};

const nl_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen verschijnen hier zodra iemand er een indient.`)
};

const pl_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia pojawią się tutaj, gdy tylko ktoś jakieś doda.`)
};

const pt_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As inscrições aparecem aqui assim que alguém enviar uma.`)
};

const ru_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работы появятся здесь, как только кто-нибудь отправит свою.`)
};

const sv_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag dyker upp här så fort någon skickar in ett.`)
};

const tr_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular, biri gönderir göndermez burada görünür.`)
};

const zh_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人投稿后，作品会立即显示在这里。`)
};

const ja_jams_entries_empty_open_text = /** @type {(inputs: Jams_Entries_Empty_Open_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`誰かが応募すると、すぐにここに表示されます。`)
};

/**
* | output |
* | --- |
* | "Entries appear here the moment someone submits one." |
*
* @param {Jams_Entries_Empty_Open_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_empty_open_text = /** @type {((inputs?: Jams_Entries_Empty_Open_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Empty_Open_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_empty_open_text(inputs)
	if (locale === "de") return de_jams_entries_empty_open_text(inputs)
	if (locale === "fr") return fr_jams_entries_empty_open_text(inputs)
	if (locale === "it") return it_jams_entries_empty_open_text(inputs)
	if (locale === "nl") return nl_jams_entries_empty_open_text(inputs)
	if (locale === "pl") return pl_jams_entries_empty_open_text(inputs)
	if (locale === "pt") return pt_jams_entries_empty_open_text(inputs)
	if (locale === "ru") return ru_jams_entries_empty_open_text(inputs)
	if (locale === "sv") return sv_jams_entries_empty_open_text(inputs)
	if (locale === "tr") return tr_jams_entries_empty_open_text(inputs)
	if (locale === "zh") return zh_jams_entries_empty_open_text(inputs)
	if (locale === "ja") return ja_jams_entries_empty_open_text(inputs)
	return en_jams_entries_empty_open_text(inputs)
});

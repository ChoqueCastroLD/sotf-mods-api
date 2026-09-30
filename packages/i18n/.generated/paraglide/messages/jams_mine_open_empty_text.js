/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_Open_Empty_TextInputs */

const en_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow a jam to hear when submissions open.`)
};

const es_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue un jam para saber cuándo abren las inscripciones.`)
};

const de_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folge einer Jam, um zu erfahren, wann Einreichungen starten.`)
};

const fr_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivez un jam pour savoir quand les participations ouvrent.`)
};

const it_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui un jam per sapere quando aprono le iscrizioni.`)
};

const nl_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volg een jam om te horen wanneer inzendingen openen.`)
};

const pl_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj jam, aby dowiedzieć się, kiedy ruszą zgłoszenia.`)
};

const pt_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siga um jam para saber quando as inscrições abrem.`)
};

const ru_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следите за джемом, чтобы узнать о начале приёма работ.`)
};

const sv_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ en jam för att få veta när bidragen öppnar.`)
};

const tr_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuruların ne zaman açılacağını öğrenmek için bir jam'i takip edin.`)
};

const zh_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注某场 Jam，即可在开放投稿时收到提醒。`)
};

const ja_jams_mine_open_empty_text = /** @type {(inputs: Jams_Mine_Open_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムをフォローすると、応募開始をお知らせします。`)
};

/**
* | output |
* | --- |
* | "Follow a jam to hear when submissions open." |
*
* @param {Jams_Mine_Open_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_open_empty_text = /** @type {((inputs?: Jams_Mine_Open_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_Open_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_open_empty_text(inputs)
	if (locale === "de") return de_jams_mine_open_empty_text(inputs)
	if (locale === "fr") return fr_jams_mine_open_empty_text(inputs)
	if (locale === "it") return it_jams_mine_open_empty_text(inputs)
	if (locale === "nl") return nl_jams_mine_open_empty_text(inputs)
	if (locale === "pl") return pl_jams_mine_open_empty_text(inputs)
	if (locale === "pt") return pt_jams_mine_open_empty_text(inputs)
	if (locale === "ru") return ru_jams_mine_open_empty_text(inputs)
	if (locale === "sv") return sv_jams_mine_open_empty_text(inputs)
	if (locale === "tr") return tr_jams_mine_open_empty_text(inputs)
	if (locale === "zh") return zh_jams_mine_open_empty_text(inputs)
	if (locale === "ja") return ja_jams_mine_open_empty_text(inputs)
	return en_jams_mine_open_empty_text(inputs)
});

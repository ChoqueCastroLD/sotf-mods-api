/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Mine_History_EmptyInputs */

const en_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You haven't entered a jam yet.`)
};

const es_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no has participado en ningún jam.`)
};

const de_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast noch an keiner Jam teilgenommen.`)
};

const fr_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n'avez encore participé à aucun jam.`)
};

const it_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai ancora partecipato a nessun jam.`)
};

const nl_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt nog aan geen jam meegedaan.`)
};

const pl_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie brałeś jeszcze udziału w żadnym jamie.`)
};

const pt_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não participou de nenhum jam.`)
};

const ru_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы пока не участвовали ни в одном джеме.`)
};

const sv_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inte deltagit i någon jam ännu.`)
};

const tr_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz hiçbir jam'e katılmadınız.`)
};

const zh_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有参加过 Jam。`)
};

const ja_jams_mine_history_empty = /** @type {(inputs: Jams_Mine_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだジャムに参加していません。`)
};

/**
* | output |
* | --- |
* | "You haven't entered a jam yet." |
*
* @param {Jams_Mine_History_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_mine_history_empty = /** @type {((inputs?: Jams_Mine_History_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_History_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_mine_history_empty(inputs)
	if (locale === "de") return de_jams_mine_history_empty(inputs)
	if (locale === "fr") return fr_jams_mine_history_empty(inputs)
	if (locale === "it") return it_jams_mine_history_empty(inputs)
	if (locale === "nl") return nl_jams_mine_history_empty(inputs)
	if (locale === "pl") return pl_jams_mine_history_empty(inputs)
	if (locale === "pt") return pt_jams_mine_history_empty(inputs)
	if (locale === "ru") return ru_jams_mine_history_empty(inputs)
	if (locale === "sv") return sv_jams_mine_history_empty(inputs)
	if (locale === "tr") return tr_jams_mine_history_empty(inputs)
	if (locale === "zh") return zh_jams_mine_history_empty(inputs)
	if (locale === "ja") return ja_jams_mine_history_empty(inputs)
	return en_jams_mine_history_empty(inputs)
});

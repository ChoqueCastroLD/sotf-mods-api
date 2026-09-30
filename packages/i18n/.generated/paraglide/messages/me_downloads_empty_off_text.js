/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Empty_Off_TextInputs */

const en_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your history is off, so nothing new is recorded here.`)
};

const es_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu historial está desactivado, así que aquí no se registra nada nuevo.`)
};

const de_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Verlauf ist aus, daher wird hier nichts Neues erfasst.`)
};

const fr_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre historique est désactivé : rien de nouveau n’est enregistré ici.`)
};

const it_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua cronologia è disattivata, quindi qui non viene registrato nulla di nuovo.`)
};

const nl_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je geschiedenis staat uit, dus hier wordt niets nieuws vastgelegd.`)
};

const pl_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja historia jest wyłączona, więc nic nowego nie jest tu zapisywane.`)
};

const pt_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu histórico está desativado, então nada novo é registrado aqui.`)
};

const ru_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`История выключена, поэтому здесь ничего нового не записывается.`)
};

const sv_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din historik är avstängd, så inget nytt sparas här.`)
};

const tr_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçmişin kapalı, bu yüzden buraya yeni bir şey kaydedilmiyor.`)
};

const zh_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的记录已关闭，这里不会记录新的内容。`)
};

const ja_me_downloads_empty_off_text = /** @type {(inputs: Me_Downloads_Empty_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`履歴がオフのため、ここには新しい記録が残りません。`)
};

/**
* | output |
* | --- |
* | "Your history is off, so nothing new is recorded here." |
*
* @param {Me_Downloads_Empty_Off_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_empty_off_text = /** @type {((inputs?: Me_Downloads_Empty_Off_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Empty_Off_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_empty_off_text(inputs)
	if (locale === "de") return de_me_downloads_empty_off_text(inputs)
	if (locale === "fr") return fr_me_downloads_empty_off_text(inputs)
	if (locale === "it") return it_me_downloads_empty_off_text(inputs)
	if (locale === "nl") return nl_me_downloads_empty_off_text(inputs)
	if (locale === "pl") return pl_me_downloads_empty_off_text(inputs)
	if (locale === "pt") return pt_me_downloads_empty_off_text(inputs)
	if (locale === "ru") return ru_me_downloads_empty_off_text(inputs)
	if (locale === "sv") return sv_me_downloads_empty_off_text(inputs)
	if (locale === "tr") return tr_me_downloads_empty_off_text(inputs)
	if (locale === "zh") return zh_me_downloads_empty_off_text(inputs)
	if (locale === "ja") return ja_me_downloads_empty_off_text(inputs)
	return en_me_downloads_empty_off_text(inputs)
});

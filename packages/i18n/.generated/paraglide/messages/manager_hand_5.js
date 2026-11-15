/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Hand_5Inputs */

const en_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check the site now and then, and repeat all of it for every update.`)
};

const es_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisar el sitio de vez en cuando y repetirlo todo en cada actualización.`)
};

const de_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ab und zu auf der Seite nachsehen und bei jedem Update alles wiederholen.`)
};

const fr_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revenir sur le site de temps en temps et tout refaire à chaque mise à jour.`)
};

const it_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricontrollare il sito ogni tanto e rifare tutto a ogni aggiornamento.`)
};

const nl_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Af en toe de site checken en alles herhalen bij elke update.`)
};

const pl_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co jakiś czas zaglądać na stronę i powtarzać wszystko przy każdej aktualizacji.`)
};

const pt_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar ao site de vez em quando e repetir tudo a cada atualização.`)
};

const ru_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Время от времени проверять сайт и повторять всё при каждом обновлении.`)
};

const sv_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titta in på sidan då och då och gör om allt vid varje uppdatering.`)
};

const tr_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siteyi ara sıra kontrol edip her güncellemede hepsini tekrarlamak.`)
};

const zh_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时不时回网站查看，每次更新都重来一遍。`)
};

const ja_manager_hand_5 = /** @type {(inputs: Manager_Hand_5Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ときどきサイトを確認し、更新のたびに全部やり直す。`)
};

/**
* | output |
* | --- |
* | "Check the site now and then, and repeat all of it for every update." |
*
* @param {Manager_Hand_5Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_hand_5 = /** @type {((inputs?: Manager_Hand_5Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Hand_5Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_hand_5(inputs)
	if (locale === "de") return de_manager_hand_5(inputs)
	if (locale === "fr") return fr_manager_hand_5(inputs)
	if (locale === "it") return it_manager_hand_5(inputs)
	if (locale === "nl") return nl_manager_hand_5(inputs)
	if (locale === "pl") return pl_manager_hand_5(inputs)
	if (locale === "pt") return pt_manager_hand_5(inputs)
	if (locale === "ru") return ru_manager_hand_5(inputs)
	if (locale === "sv") return sv_manager_hand_5(inputs)
	if (locale === "tr") return tr_manager_hand_5(inputs)
	if (locale === "zh") return zh_manager_hand_5(inputs)
	if (locale === "ja") return ja_manager_hand_5(inputs)
	return en_manager_hand_5(inputs)
});

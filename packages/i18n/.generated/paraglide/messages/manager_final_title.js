/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Final_TitleInputs */

const en_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your next run starts here`)
};

const es_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu próxima partida empieza aquí`)
};

const de_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein nächster Run beginnt hier`)
};

const fr_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre prochaine partie commence ici`)
};

const it_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua prossima partita inizia qui`)
};

const nl_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgende run begint hier`)
};

const pl_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja następna rozgrywka zaczyna się tutaj`)
};

const pt_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua próxima partida começa aqui`)
};

const ru_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша следующая игра начинается здесь`)
};

const sv_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din nästa omgång börjar här`)
};

const tr_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir sonraki oyunun burada başlıyor`)
};

const zh_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一局从这里开始`)
};

const ja_manager_final_title = /** @type {(inputs: Manager_Final_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次のプレイはここから`)
};

/**
* | output |
* | --- |
* | "Your next run starts here" |
*
* @param {Manager_Final_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_final_title = /** @type {((inputs?: Manager_Final_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Final_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_final_title(inputs)
	if (locale === "de") return de_manager_final_title(inputs)
	if (locale === "fr") return fr_manager_final_title(inputs)
	if (locale === "it") return it_manager_final_title(inputs)
	if (locale === "nl") return nl_manager_final_title(inputs)
	if (locale === "pl") return pl_manager_final_title(inputs)
	if (locale === "pt") return pt_manager_final_title(inputs)
	if (locale === "ru") return ru_manager_final_title(inputs)
	if (locale === "sv") return sv_manager_final_title(inputs)
	if (locale === "tr") return tr_manager_final_title(inputs)
	if (locale === "zh") return zh_manager_final_title(inputs)
	if (locale === "ja") return ja_manager_final_title(inputs)
	return en_manager_final_title(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Field_Report_TitleInputs */

const en_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Did it work in your game?`)
};

const es_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Te funcionó en tu partida?`)
};

const de_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hat es in deinem Spiel funktioniert?`)
};

const fr_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ça a marché dans votre partie ?`)
};

const it_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ha funzionato nella tua partita?`)
};

const nl_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkte het in je game?`)
};

const pl_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czy działało w twojej grze?`)
};

const pt_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funcionou no seu jogo?`)
};

const ru_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сработало в вашей игре?`)
};

const sv_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerade det i ditt spel?`)
};

const tr_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyununda çalıştı mı?`)
};

const zh_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在你的游戏里能用吗？`)
};

const ja_mod_field_report_title = /** @type {(inputs: Mod_Field_Report_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームで動きましたか？`)
};

/**
* | output |
* | --- |
* | "Did it work in your game?" |
*
* @param {Mod_Field_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_field_report_title = /** @type {((inputs?: Mod_Field_Report_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Field_Report_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_field_report_title(inputs)
	if (locale === "de") return de_mod_field_report_title(inputs)
	if (locale === "fr") return fr_mod_field_report_title(inputs)
	if (locale === "it") return it_mod_field_report_title(inputs)
	if (locale === "nl") return nl_mod_field_report_title(inputs)
	if (locale === "pl") return pl_mod_field_report_title(inputs)
	if (locale === "pt") return pt_mod_field_report_title(inputs)
	if (locale === "ru") return ru_mod_field_report_title(inputs)
	if (locale === "sv") return sv_mod_field_report_title(inputs)
	if (locale === "tr") return tr_mod_field_report_title(inputs)
	if (locale === "zh") return zh_mod_field_report_title(inputs)
	if (locale === "ja") return ja_mod_field_report_title(inputs)
	return en_mod_field_report_title(inputs)
});

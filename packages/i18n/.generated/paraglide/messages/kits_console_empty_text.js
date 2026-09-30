/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Console_Empty_TextInputs */

const en_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a kit, lay out the mods you play with and share it with one code.`)
};

const es_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un kit, coloca los mods con los que juegas y compártelo con un código.`)
};

const de_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstelle ein Kit, leg die Mods aus, mit denen du spielst, und teile es mit einem Code.`)
};

const fr_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez un kit, disposez les mods avec lesquels vous jouez et partagez-le avec un code.`)
};

const it_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un kit, disponi le mod con cui giochi e condividilo con un codice.`)
};

const nl_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak een kit, leg de mods neer waarmee je speelt en deel hem met één code.`)
};

const pl_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz zestaw, rozłóż mody, z którymi grasz, i udostępnij go jednym kodem.`)
};

const pt_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie um kit, organize os mods com que você joga e compartilhe com um código.`)
};

const ru_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте набор, разложите моды, с которыми играете, и поделитесь им по одному коду.`)
};

const sv_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa ett kit, lägg ut moddarna du spelar med och dela det med en kod.`)
};

const tr_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kit oluştur, oynadığın modları diz ve tek bir kodla paylaş.`)
};

const zh_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建一个套装，摆上你在用的模组，再用一个代码分享出去。`)
};

const ja_kits_console_empty_text = /** @type {(inputs: Kits_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを作成し、遊んでいる MOD を並べて、コードひとつで共有しましょう。`)
};

/**
* | output |
* | --- |
* | "Create a kit, lay out the mods you play with and share it with one code." |
*
* @param {Kits_Console_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_console_empty_text = /** @type {((inputs?: Kits_Console_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Console_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_console_empty_text(inputs)
	if (locale === "de") return de_kits_console_empty_text(inputs)
	if (locale === "fr") return fr_kits_console_empty_text(inputs)
	if (locale === "it") return it_kits_console_empty_text(inputs)
	if (locale === "nl") return nl_kits_console_empty_text(inputs)
	if (locale === "pl") return pl_kits_console_empty_text(inputs)
	if (locale === "pt") return pt_kits_console_empty_text(inputs)
	if (locale === "ru") return ru_kits_console_empty_text(inputs)
	if (locale === "sv") return sv_kits_console_empty_text(inputs)
	if (locale === "tr") return tr_kits_console_empty_text(inputs)
	if (locale === "zh") return zh_kits_console_empty_text(inputs)
	if (locale === "ja") return ja_kits_console_empty_text(inputs)
	return en_kits_console_empty_text(inputs)
});

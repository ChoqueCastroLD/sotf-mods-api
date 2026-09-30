/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Bundles_No_KitsInputs */

const en_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have no public or unlisted kits yet. Create one in your kits.`)
};

const es_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no tienes kits públicos o no listados. Crea uno en tus kits.`)
};

const de_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast noch keine öffentlichen oder nicht gelisteten Kits. Erstelle eines unter deinen Kits.`)
};

const fr_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu n'as pas encore de kit public ou non répertorié. Crées-en un dans tes kits.`)
};

const it_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai ancora kit pubblici o non in elenco. Creane uno tra i tuoi kit.`)
};

const nl_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt nog geen openbare of niet-getoonde kits. Maak er een bij je kits.`)
};

const pl_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie masz jeszcze publicznych ani niewymienionych zestawów. Utwórz jeden w swoich zestawach.`)
};

const pt_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não tens kits públicos ou não listados. Cria um nos teus kits.`)
};

const ru_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас пока нет публичных или скрытых наборов. Создайте набор в разделе «Мои наборы».`)
};

const sv_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inga publika eller olistade kit än. Skapa ett bland dina kit.`)
};

const tr_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz herkese açık veya listelenmemiş kitin yok. Kitlerinde bir tane oluştur.`)
};

const zh_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有公开或未列出的合集，请先在你的合集中创建一个。`)
};

const ja_bundles_no_kits = /** @type {(inputs: Bundles_No_KitsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開または限定公開のキットがまだありません。キットの画面で作成してください。`)
};

/**
* | output |
* | --- |
* | "You have no public or unlisted kits yet. Create one in your kits." |
*
* @param {Bundles_No_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const bundles_no_kits = /** @type {((inputs?: Bundles_No_KitsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_No_KitsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_bundles_no_kits(inputs)
	if (locale === "de") return de_bundles_no_kits(inputs)
	if (locale === "fr") return fr_bundles_no_kits(inputs)
	if (locale === "it") return it_bundles_no_kits(inputs)
	if (locale === "nl") return nl_bundles_no_kits(inputs)
	if (locale === "pl") return pl_bundles_no_kits(inputs)
	if (locale === "pt") return pt_bundles_no_kits(inputs)
	if (locale === "ru") return ru_bundles_no_kits(inputs)
	if (locale === "sv") return sv_bundles_no_kits(inputs)
	if (locale === "tr") return tr_bundles_no_kits(inputs)
	if (locale === "zh") return zh_bundles_no_kits(inputs)
	if (locale === "ja") return ja_bundles_no_kits(inputs)
	return en_bundles_no_kits(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_2_TextInputs */

const en_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make a new mod or build, alone or with co-authors, in a few days.`)
};

const es_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un mod o una build nuevos, solo o con coautores, en unos días.`)
};

const de_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baue in wenigen Tagen einen neuen Mod oder Build, allein oder mit Mitautoren.`)
};

const fr_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez un nouveau mod ou une nouvelle build, seul ou avec des co-auteurs, en quelques jours.`)
};

const it_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un nuovo mod o una nuova build, da solo o con coautori, in pochi giorni.`)
};

const nl_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak in een paar dagen een nieuwe mod of build, alleen of met co-auteurs.`)
};

const pl_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stwórz w kilka dni nowy mod lub build, sam albo ze współautorami.`)
};

const pt_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie um novo mod ou build em poucos dias, sozinho ou com coautores.`)
};

const ru_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сделайте новый мод или постройку за несколько дней, в одиночку или с соавторами.`)
};

const sv_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa en ny mod eller ett nytt bygge på några dagar, ensam eller med medförfattare.`)
};

const tr_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birkaç gün içinde tek başına ya da ortak yazarlarla yeni bir mod veya yapı yap.`)
};

const zh_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用几天时间，独自或与共同作者做出新的模组或建筑。`)
};

const ja_jams_how_2_text = /** @type {(inputs: Jams_How_2_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数日のあいだに、ひとりで、または共同制作者と新しい MOD や建築を作ります。`)
};

/**
* | output |
* | --- |
* | "Make a new mod or build, alone or with co-authors, in a few days." |
*
* @param {Jams_How_2_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_2_text = /** @type {((inputs?: Jams_How_2_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_2_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_2_text(inputs)
	if (locale === "de") return de_jams_how_2_text(inputs)
	if (locale === "fr") return fr_jams_how_2_text(inputs)
	if (locale === "it") return it_jams_how_2_text(inputs)
	if (locale === "nl") return nl_jams_how_2_text(inputs)
	if (locale === "pl") return pl_jams_how_2_text(inputs)
	if (locale === "pt") return pt_jams_how_2_text(inputs)
	if (locale === "ru") return ru_jams_how_2_text(inputs)
	if (locale === "sv") return sv_jams_how_2_text(inputs)
	if (locale === "tr") return tr_jams_how_2_text(inputs)
	if (locale === "zh") return zh_jams_how_2_text(inputs)
	if (locale === "ja") return ja_jams_how_2_text(inputs)
	return en_jams_how_2_text(inputs)
});

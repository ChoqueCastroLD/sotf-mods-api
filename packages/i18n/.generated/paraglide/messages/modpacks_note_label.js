/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Note_LabelInputs */

const en_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Note for players about ${i?.name}`)
};

const es_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nota para los jugadores sobre ${i?.name}`)
};

const de_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hinweis für Spieler zu ${i?.name}`)
};

const fr_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Note aux joueurs sur ${i?.name}`)
};

const it_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nota per i giocatori su ${i?.name}`)
};

const nl_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opmerking voor spelers over ${i?.name}`)
};

const pl_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Notatka dla graczy o ${i?.name}`)
};

const pt_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nota para os jogadores sobre ${i?.name}`)
};

const ru_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Заметка для игроков о ${i?.name}`)
};

const sv_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anteckning till spelarna om ${i?.name}`)
};

const tr_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hakkında oyunculara not`)
};

const zh_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`给玩家的 ${i?.name} 说明`)
};

const ja_modpacks_note_label = /** @type {(inputs: Modpacks_Note_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} についてのプレイヤー向けメモ`)
};

/**
* | output |
* | --- |
* | "Note for players about {name}" |
*
* @param {Modpacks_Note_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_note_label = /** @type {((inputs: Modpacks_Note_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Note_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_note_label(inputs)
	if (locale === "de") return de_modpacks_note_label(inputs)
	if (locale === "fr") return fr_modpacks_note_label(inputs)
	if (locale === "it") return it_modpacks_note_label(inputs)
	if (locale === "nl") return nl_modpacks_note_label(inputs)
	if (locale === "pl") return pl_modpacks_note_label(inputs)
	if (locale === "pt") return pt_modpacks_note_label(inputs)
	if (locale === "ru") return ru_modpacks_note_label(inputs)
	if (locale === "sv") return sv_modpacks_note_label(inputs)
	if (locale === "tr") return tr_modpacks_note_label(inputs)
	if (locale === "zh") return zh_modpacks_note_label(inputs)
	if (locale === "ja") return ja_modpacks_note_label(inputs)
	return en_modpacks_note_label(inputs)
});

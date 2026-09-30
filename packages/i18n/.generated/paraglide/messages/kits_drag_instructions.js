/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Drag_InstructionsInputs */

const en_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To reorder, focus a handle and press Space, move with the arrow keys, then press Space again to drop or Escape to cancel.`)
};

const es_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para reordenar, enfoca un asa y pulsa Espacio, muévela con las flechas y pulsa Espacio otra vez para soltarla o Escape para cancelar.`)
};

const de_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Umsortieren einen Griff fokussieren und die Leertaste drücken, mit den Pfeiltasten verschieben, dann mit der Leertaste ablegen oder mit Escape abbrechen.`)
};

const fr_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour réordonner, placez le focus sur une poignée et appuyez sur Espace, déplacez avec les flèches, puis appuyez de nouveau sur Espace pour déposer ou sur Échap pour annuler.`)
};

const it_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per riordinare, metti il focus su una maniglia e premi Spazio, sposta con le frecce, poi premi di nuovo Spazio per rilasciare o Esc per annullare.`)
};

const nl_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Focus een greep en druk op Spatie om te herschikken, verplaats met de pijltjestoetsen en druk nogmaals op Spatie om los te laten of op Escape om te annuleren.`)
};

const pl_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aby zmienić kolejność, ustaw fokus na uchwycie i naciśnij Spację, przesuń strzałkami, a potem naciśnij Spację, aby upuścić, lub Escape, aby anulować.`)
};

const pt_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para reordenar, foque uma alça e pressione Espaço, mova com as setas e pressione Espaço de novo para soltar ou Esc para cancelar.`)
};

const ru_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чтобы изменить порядок, наведите фокус на маркер и нажмите Пробел, перемещайте стрелками, затем снова нажмите Пробел, чтобы отпустить, или Escape для отмены.`)
};

const sv_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta genom att fokusera ett handtag och trycka på mellanslag, flytta med piltangenterna och tryck mellanslag igen för att släppa eller Escape för att avbryta.`)
};

const tr_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralamak için bir tutamacı seçip Boşluk’a bas, ok tuşlarıyla taşı, bırakmak için yine Boşluk’a, iptal için Escape’e bas.`)
};

const zh_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要调整顺序，请聚焦拖动手柄并按空格键，用方向键移动，再按空格键放下，或按 Esc 取消。`)
};

const ja_kits_drag_instructions = /** @type {(inputs: Kits_Drag_InstructionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替えるには、ハンドルにフォーカスして Space キーを押し、矢印キーで移動し、もう一度 Space で確定、Esc で取り消します。`)
};

/**
* | output |
* | --- |
* | "To reorder, focus a handle and press Space, move with the arrow keys, then press Space again to drop or Escape to cancel." |
*
* @param {Kits_Drag_InstructionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_drag_instructions = /** @type {((inputs?: Kits_Drag_InstructionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Drag_InstructionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_drag_instructions(inputs)
	if (locale === "de") return de_kits_drag_instructions(inputs)
	if (locale === "fr") return fr_kits_drag_instructions(inputs)
	if (locale === "it") return it_kits_drag_instructions(inputs)
	if (locale === "nl") return nl_kits_drag_instructions(inputs)
	if (locale === "pl") return pl_kits_drag_instructions(inputs)
	if (locale === "pt") return pt_kits_drag_instructions(inputs)
	if (locale === "ru") return ru_kits_drag_instructions(inputs)
	if (locale === "sv") return sv_kits_drag_instructions(inputs)
	if (locale === "tr") return tr_kits_drag_instructions(inputs)
	if (locale === "zh") return zh_kits_drag_instructions(inputs)
	if (locale === "ja") return ja_kits_drag_instructions(inputs)
	return en_kits_drag_instructions(inputs)
});

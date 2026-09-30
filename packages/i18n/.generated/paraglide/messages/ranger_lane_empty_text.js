/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Lane_Empty_TextInputs */

const en_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing waits in this lane. New items show up here by themselves.`)
};

const es_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay nada en este carril. Los nuevos elementos aparecerán aquí solos.`)
};

const de_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In dieser Bahn wartet nichts. Neue Einträge erscheinen hier von selbst.`)
};

const fr_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien n’attend dans cette voie. Les nouveaux éléments apparaîtront ici tout seuls.`)
};

const it_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In questa corsia non c’è niente. I nuovi elementi compariranno qui da soli.`)
};

const nl_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er wacht niets in deze baan. Nieuwe items verschijnen hier vanzelf.`)
};

const pl_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na tym torze nic nie czeka. Nowe elementy pojawią się tu same.`)
};

const pt_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada aguarda nesta faixa. Novos itens aparecem aqui sozinhos.`)
};

const ru_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На этой дорожке ничего не ждёт. Новые элементы появятся здесь сами.`)
};

const sv_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget väntar i den här filen. Nya objekt dyker upp här av sig själva.`)
};

const tr_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu şeritte bekleyen bir şey yok. Yeni öğeler burada kendiliğinden görünür.`)
};

const zh_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此通道没有待处理项。新项目会自动出现在这里。`)
};

const ja_ranger_lane_empty_text = /** @type {(inputs: Ranger_Lane_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このレーンに待機中の項目はありません。新しい項目は自動的にここに表示されます。`)
};

/**
* | output |
* | --- |
* | "Nothing waits in this lane. New items show up here by themselves." |
*
* @param {Ranger_Lane_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_empty_text = /** @type {((inputs?: Ranger_Lane_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_empty_text(inputs)
	if (locale === "de") return de_ranger_lane_empty_text(inputs)
	if (locale === "fr") return fr_ranger_lane_empty_text(inputs)
	if (locale === "it") return it_ranger_lane_empty_text(inputs)
	if (locale === "nl") return nl_ranger_lane_empty_text(inputs)
	if (locale === "pl") return pl_ranger_lane_empty_text(inputs)
	if (locale === "pt") return pt_ranger_lane_empty_text(inputs)
	if (locale === "ru") return ru_ranger_lane_empty_text(inputs)
	if (locale === "sv") return sv_ranger_lane_empty_text(inputs)
	if (locale === "tr") return tr_ranger_lane_empty_text(inputs)
	if (locale === "zh") return zh_ranger_lane_empty_text(inputs)
	if (locale === "ja") return ja_ranger_lane_empty_text(inputs)
	return en_ranger_lane_empty_text(inputs)
});

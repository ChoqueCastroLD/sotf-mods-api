/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Escalate_TextInputs */

const en_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell the admins what they need to look at. The item stays in its queue, marked as escalated and sorted as high risk.`)
};

const es_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explica a los administradores qué deben revisar. El elemento sigue en su cola, marcado como escalado y ordenado como riesgo alto.`)
};

const de_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sag den Admins, was sie sich ansehen sollen. Der Eintrag bleibt in seiner Warteschlange, als eskaliert markiert und als hohes Risiko sortiert.`)
};

const fr_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indique aux admins ce qu’ils doivent examiner. L’élément reste dans sa file, marqué comme escaladé et trié en risque élevé.`)
};

const it_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiega agli amministratori cosa devono controllare. L’elemento resta nella sua coda, segnato come inoltrato e ordinato come rischio alto.`)
};

const nl_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertel de beheerders waar ze naar moeten kijken. Het item blijft in zijn wachtrij, gemarkeerd als geëscaleerd en gesorteerd als hoog risico.`)
};

const pl_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Napisz administratorom, co mają sprawdzić. Element zostaje w swojej kolejce, oznaczony jako eskalowany i sortowany jako wysokie ryzyko.`)
};

const pt_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diga aos administradores o que eles precisam ver. O item continua na fila, marcado como escalado e ordenado como risco alto.`)
};

const ru_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Напишите администраторам, на что посмотреть. Элемент остаётся в своей очереди, помечен как переданный и сортируется как высокий риск.`)
};

const sv_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berätta för administratörerna vad de ska titta på. Ärendet stannar i sin kö, markerat som eskalerat och sorterat som hög risk.`)
};

const tr_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yöneticilere neye bakmaları gerektiğini yaz. Öğe kuyruğunda kalır, yükseltildi olarak işaretlenir ve yüksek risk olarak sıralanır.`)
};

const zh_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉管理员需要查看什么。此项仍留在原队列中，标记为已上报并按高风险排序。`)
};

const ja_ranger_escalate_text = /** @type {(inputs: Ranger_Escalate_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理者に確認してほしい点を伝えてください。項目はキューに残り、エスカレーション済みとして高リスク扱いで並びます。`)
};

/**
* | output |
* | --- |
* | "Tell the admins what they need to look at. The item stays in its queue, marked as escalated and sorted as high risk." |
*
* @param {Ranger_Escalate_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_escalate_text = /** @type {((inputs?: Ranger_Escalate_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_escalate_text(inputs)
	if (locale === "de") return de_ranger_escalate_text(inputs)
	if (locale === "fr") return fr_ranger_escalate_text(inputs)
	if (locale === "it") return it_ranger_escalate_text(inputs)
	if (locale === "nl") return nl_ranger_escalate_text(inputs)
	if (locale === "pl") return pl_ranger_escalate_text(inputs)
	if (locale === "pt") return pt_ranger_escalate_text(inputs)
	if (locale === "ru") return ru_ranger_escalate_text(inputs)
	if (locale === "sv") return sv_ranger_escalate_text(inputs)
	if (locale === "tr") return tr_ranger_escalate_text(inputs)
	if (locale === "zh") return zh_ranger_escalate_text(inputs)
	if (locale === "ja") return ja_ranger_escalate_text(inputs)
	return en_ranger_escalate_text(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Offline_DetailInputs */

const en_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changes you make now may not be saved. We’ll refresh everything when you’re back online.`)
};

const es_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puede que los cambios que hagas ahora no se guarden. Lo actualizaremos todo cuando vuelvas a tener conexión.`)
};

const de_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen, die du jetzt machst, werden eventuell nicht gespeichert. Sobald du wieder online bist, aktualisieren wir alles.`)
};

const fr_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les modifications faites maintenant risquent de ne pas être enregistrées. Nous actualiserons tout dès votre retour en ligne.`)
};

const it_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le modifiche che fai adesso potrebbero non essere salvate. Aggiorneremo tutto appena torni online.`)
};

const nl_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen die je nu maakt, worden misschien niet opgeslagen. We vernieuwen alles zodra je weer online bent.`)
};

const pl_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiany wprowadzone teraz mogą się nie zapisać. Odświeżymy wszystko, gdy wrócisz do sieci.`)
};

const pt_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As alterações que você fizer agora podem não ser salvas. Vamos atualizar tudo quando você voltar a ficar online.`)
};

const ru_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменения, сделанные сейчас, могут не сохраниться. Мы всё обновим, когда вы снова будете в сети.`)
};

const sv_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändringar du gör nu kanske inte sparas. Vi uppdaterar allt när du är online igen.`)
};

const tr_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şu an yaptığın değişiklikler kaydedilmeyebilir. Tekrar çevrimiçi olduğunda her şeyi yenileyeceğiz.`)
};

const zh_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你现在所做的更改可能无法保存。恢复联网后我们会刷新所有内容。`)
};

const ja_console_offline_detail = /** @type {(inputs: Console_Offline_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今の変更は保存されない可能性があります。オンラインに戻ったらすべて更新します。`)
};

/**
* | output |
* | --- |
* | "Changes you make now may not be saved. We’ll refresh everything when you’re back online." |
*
* @param {Console_Offline_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_offline_detail = /** @type {((inputs?: Console_Offline_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Offline_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_offline_detail(inputs)
	if (locale === "de") return de_console_offline_detail(inputs)
	if (locale === "fr") return fr_console_offline_detail(inputs)
	if (locale === "it") return it_console_offline_detail(inputs)
	if (locale === "nl") return nl_console_offline_detail(inputs)
	if (locale === "pl") return pl_console_offline_detail(inputs)
	if (locale === "pt") return pt_console_offline_detail(inputs)
	if (locale === "ru") return ru_console_offline_detail(inputs)
	if (locale === "sv") return sv_console_offline_detail(inputs)
	if (locale === "tr") return tr_console_offline_detail(inputs)
	if (locale === "zh") return zh_console_offline_detail(inputs)
	if (locale === "ja") return ja_console_offline_detail(inputs)
	return en_console_offline_detail(inputs)
});

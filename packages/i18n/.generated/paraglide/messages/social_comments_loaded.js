/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Social_Comments_LoadedInputs */

const en_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No more comments.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} more comment loaded.`);
	return /** @type {LocalizedString} */ (`${count__number} more comments loaded.`)
	
};

const es_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No hay más comentarios.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se cargó ${count__number} comentario más.`);
	return /** @type {LocalizedString} */ (`Se cargaron ${count__number} comentarios más.`)
	
};

const de_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Keine weiteren Kommentare.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} weiterer Kommentar geladen.`);
	return /** @type {LocalizedString} */ (`${count__number} weitere Kommentare geladen.`)
	
};

const fr_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Plus de commentaires.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} commentaire de plus chargé.`);
	return /** @type {LocalizedString} */ (`${count__number} commentaires de plus chargés.`)
	
};

const it_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessun altro commento.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Caricato ${count__number} altro commento.`);
	return /** @type {LocalizedString} */ (`Caricati altri ${count__number} commenti.`)
	
};

const nl_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen reacties meer.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} extra reactie geladen.`);
	return /** @type {LocalizedString} */ (`${count__number} extra reacties geladen.`)
	
};

const pl_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Brak kolejnych komentarzy.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Wczytano ${count__number} komentarz więcej.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wczytano ${count__number} komentarze więcej.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wczytano ${count__number} komentarzy więcej.`);
	return /** @type {LocalizedString} */ (`Wczytano ${count__number} komentarza więcej.`)
	
};

const pt_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Não há mais comentários.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mais ${count__number} comentário carregado.`);
	return /** @type {LocalizedString} */ (`Mais ${count__number} comentários carregados.`)
	
};

const ru_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Больше комментариев нет.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Загружен ещё ${count__number} комментарий.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Загружено ещё ${count__number} комментария.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Загружено ещё ${count__number} комментариев.`);
	return /** @type {LocalizedString} */ (`Загружено ещё ${count__number} комментария.`)
	
};

const sv_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga fler kommentarer.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kommentar till har laddats.`);
	return /** @type {LocalizedString} */ (`${count__number} kommentarer till har laddats.`)
	
};

const tr_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Başka yorum yok.`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yorum daha yüklendi.`);
	return /** @type {LocalizedString} */ (`${count__number} yorum daha yüklendi.`)
	
};

const zh_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有更多评论了。`);
	return /** @type {LocalizedString} */ (`又加载了 ${count__number} 条评论。`)
	
};

const ja_social_comments_loaded = /** @type {(inputs: Social_Comments_LoadedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`これ以上コメントはありません。`);
	return /** @type {LocalizedString} */ (`コメントをさらに ${count__number} 件読み込みました。`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No more comments." |
* | * | "one" | "{count__number} more comment loaded." |
* | * | * | "{count__number} more comments loaded." |
*
* @param {Social_Comments_LoadedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comments_loaded = /** @type {((inputs: Social_Comments_LoadedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comments_LoadedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comments_loaded(inputs)
	if (locale === "de") return de_social_comments_loaded(inputs)
	if (locale === "fr") return fr_social_comments_loaded(inputs)
	if (locale === "it") return it_social_comments_loaded(inputs)
	if (locale === "nl") return nl_social_comments_loaded(inputs)
	if (locale === "pl") return pl_social_comments_loaded(inputs)
	if (locale === "pt") return pt_social_comments_loaded(inputs)
	if (locale === "ru") return ru_social_comments_loaded(inputs)
	if (locale === "sv") return sv_social_comments_loaded(inputs)
	if (locale === "tr") return tr_social_comments_loaded(inputs)
	if (locale === "zh") return zh_social_comments_loaded(inputs)
	if (locale === "ja") return ja_social_comments_loaded(inputs)
	return en_social_comments_loaded(inputs)
});
